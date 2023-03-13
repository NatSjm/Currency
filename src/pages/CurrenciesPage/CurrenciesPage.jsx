import { useContext, useEffect, useMemo } from 'react';
import { CurrenciesContext } from '../../components/CurrenciesProvider/CurrenciesProvider';
import Page from '../../components/Page';
import ToggleableList from '../../components/ToggleableList';
import { ListingHeader } from './ListingHeader';
import { ListingItem } from './ListingItem';
import { CURRENCIES_TOGGLER_SETTINGS } from '../../constants/currenciesTogglerSettings';
import Loader from '../../components/Loader';

const modeSettings = {
	initialMode: 'nocash',
	modeOptions: CURRENCIES_TOGGLER_SETTINGS
};

const CurrenciesPage = () => {
	const currenciesValue = useContext(CurrenciesContext);
	const {currenciesList, getCurrenciesList, isLoading, error} = currenciesValue;

	useEffect(() => {
		getCurrenciesList();
	}, []);

	const sortedList = useMemo(() => (currenciesList || []).sort((a, b) => a.shortName.localeCompare(b.shortName)), [currenciesList]);

	if (isLoading) return <Loader/>;
	if (error) return <div className="text-center">{error}</div>;
	return (
		<Page title={'Kurzovní lístek'}>
			<ToggleableList
				items={sortedList}
				itemComponent={ListingItem}
				headerComponent={ListingHeader}
				modeSettings={modeSettings}
			/>
		</Page>
	);
};
export default CurrenciesPage;
