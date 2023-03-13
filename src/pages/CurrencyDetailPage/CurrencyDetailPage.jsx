import { useContext, useEffect, useMemo } from 'react';
import { CurrenciesContext } from '../../components/CurrenciesProvider/CurrenciesProvider';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from "../../components/Loader";
import Page from "../../components/Page";
import ToggleableList from "../../components/ToggleableList";
import { ListingItem } from "./ListingItem";
import { ListingHeader } from "./ListingHeader";
import { CURRENCIES_TOGGLER_SETTINGS } from "../../constants/currenciesTogglerSettings";
import { CURRENCY_FULL_NAMES } from "../../constants/currencyFullNames";

const backLinkProps = {
	link: '/',
	label: 'Zpět na kurzovní lístek'
};

const CurrencyDetailPage = () => {
	const currenciesValue = useContext(CurrenciesContext);
	const {currenciesList, getCurrenciesList, isLoading, error} = currenciesValue;
	const params = useParams();
	const navigate = useNavigate();
	const {slug} = params;

	const detailData = (currenciesList || []).filter((cur) => cur.shortName === slug);
	const currency = detailData[0];


	useEffect(() => {
		if (!currenciesList?.length && !isLoading && !error) {
			getCurrenciesList()
		} else {
			if (currenciesList?.length && !detailData.length) {
				navigate('/')
			}
		}
	}, [currenciesList?.length, detailData.length, slug, isLoading, getCurrenciesList, navigate, error]);

	const hasCashMode = currency?.valBuy || currency?.valSell || currency?.valMid;

	const modeSettings = useMemo(() => ({
		initialMode: 'nocash',
		modeOptions: hasCashMode ? CURRENCIES_TOGGLER_SETTINGS : null
	}), [hasCashMode]);


	if (isLoading) return <Loader/>;
	if (error) return <div className="text-center">{error}</div>;
	if (!currency) return null;

	return (
		<Page
			title={`${currency.shortName} - ${CURRENCY_FULL_NAMES[currency.shortName] || ''}`}
			subtitle={currency.country}
			backLinkProps={backLinkProps}
		>
			<ToggleableList
				items={detailData}
				itemComponent={ListingItem}
				headerComponent={ListingHeader}
				listTitle={hasCashMode ? null : 'Bezhotovostně'}
				modeSettings={modeSettings}
			/>
		</Page>

	);
};

export default CurrencyDetailPage;
