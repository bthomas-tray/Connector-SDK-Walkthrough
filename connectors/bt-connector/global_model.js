/*
	Global connector model config.
	Documentation: https://github.com/trayio/falafel#global-models
*/
module.exports = {
	options: {
		json: true,
		headers: {
			Authorization: `Bearer {{#auth.access_token}}`
		},
	},

	baseUrl: 'https://private-454cdd-sampleconnectorsdk.apiary-mock.com',

	expects: '2xx',
};
