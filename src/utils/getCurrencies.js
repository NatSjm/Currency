export const getCurrencies = async() => {
	const response = await fetch('https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e');
	if (!response.ok) {
		throw new Error({ message: 'Failed to fetch currencies.', status: 500 });
	}
	return response.json();
};
