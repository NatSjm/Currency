import { useState } from 'react';
import FilterButtons from '../FilterButtons';


const ToggleableList = (props) => {
	const {
		headerComponent: HeaderComponent,
		itemComponent: ItemComponent,
		itemProps,
		noDataMessage = "Nejsou k dispozici žádné údaje",
		items,
		modeSettings,
		listTitle
	} = props;
	const [mode, setMode] = useState(() => modeSettings?.initialMode || '');

	if (!items?.length) return <div className="text-center pt-4">{noDataMessage}</div>;
	return (
		<div>
			{modeSettings?.modeOptions && (
				<FilterButtons activeFilter={mode} filterProps={modeSettings.modeOptions} onFilterChange={setMode}/>)}
			<div className="mt-10">
				{listTitle && (<h3 className="pb-4 font-bold text-center text-2xl">{listTitle}</h3>)}
				<div className="shadow overflow-x-auto rounded border-b border-gray-200">
					<table className="min-w-full bg-white">
						{HeaderComponent && (
							<thead className="bg-blue-300 text-gray">
							<HeaderComponent/>
							</thead>
						)}
						<tbody className="text-gray-700">
						{(items || []).map((itemData, index) => (
							<ItemComponent
								key={itemData.id || index}
								{...(itemProps || {})}
								itemData={itemData}
								mode={mode}
							/>
						))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
};
export default ToggleableList;
