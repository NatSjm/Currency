import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CURRENCY_FULL_NAMES } from '../../constants/currencyFullNames';


const BaseListingItem = (props) => {
	const { itemData, mode } = props;
	const { shortName, amount, currBuy, currMid, currSell, valBuy, valSell, valMid } = itemData;
	const navigate = useNavigate();

	const onRowClick = useCallback(() => {
        navigate(`/${shortName}`)
	}, [navigate, shortName]);

	return (
		<tr onClick={onRowClick} className="even:bg-gray-100 cursor-pointer">
			<td className="text-left py-3 px-2">{`${shortName} - ${CURRENCY_FULL_NAMES[shortName] || ''}`}</td>
			<td className="text-center py-3 px-2">{amount}</td>
			<td className="text-center py-3 px-2">{mode === 'nocash' ? currBuy || '-'  : valBuy || '-'}</td>
			<td className="text-center py-3 px-2">{mode === 'nocash' ? currSell || '-' : valSell || '-'}</td>
			<td className="text-right py-3 px-2">{mode === 'nocash' ? currMid || '-' : valMid || '-'}</td>
		</tr>
	)
};

export const ListingItem = memo(BaseListingItem);
