export default function http(url: string, options = {}) {
	return fetch(url, {
		method: 'GET',
		headers: {
			'X-ETKINLIK-TOKEN': '55ffb90a3e1508a4d158663d07320d23',
		},
		...options,
	});
}
