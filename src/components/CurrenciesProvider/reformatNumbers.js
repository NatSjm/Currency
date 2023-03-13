export const reformatNumbers = (data) => (
	data.map((item) => {
			const { country, amount, name, shortName, version, validFrom, ...rest} = item;
			const newObj = {};
			Object.entries(rest).forEach(([key, value]) => {
				newObj[key] = value && typeof value === 'number' ? value.toLocaleString() : value
			});
			return {
				...item,
				...newObj
			}
		}
	)
);
