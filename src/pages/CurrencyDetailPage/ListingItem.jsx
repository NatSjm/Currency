import { memo } from 'react';

const BaseListingItem = (props) => {
	const { itemData, mode } = props;
	const { amount, currBuy, currMid, currSell, valBuy, valSell, valMid, cnbMid, move, ecbMid } = itemData;

	return (
		<tr className="even:bg-gray-100">
			<td className="text-left py-3 px-2">{amount}</td>
			<td className="text-center py-3 px-2">{mode === 'nocash' ? currBuy || '-'  : valBuy || '-'}</td>
			<td className="text-center py-3 px-2">{mode === 'nocash' ? currSell || '-' : valSell || '-'}</td>
			<td className="text-center py-3 px-2">{mode === 'nocash' ? currMid || '-' : valMid || '-'}</td>
			<td className="text-center py-3 px-2">{cnbMid}</td>
			<td className="text-center py-3 px-2">{move}</td>
			<td className="text-right py-3 px-2">{ecbMid}</td>
		</tr>
	)
};

export const ListingItem = memo(BaseListingItem);
