const FilterButtons = (props) => {
	const { activeFilter, onFilterChange, filterProps } = props;
	return (
		<div className="flex flex-col items-center justify-center mt-12">
				<ul className="flex space-x-2">
					{(filterProps || []).map(({label, value}) => (
					<li key={label}>
						<button
							onClick={() => onFilterChange(value)}
							className={`inline-block px-4 py-2  rounded shadow ${value === activeFilter ? "bg-zinc-500 text-white" : "text-gray-600 bg-white hover:bg-zinc-200"}`}
						>
							{label}
						</button>
					</li>
					))}
				</ul>
		</div>

	)
};

export default FilterButtons;
