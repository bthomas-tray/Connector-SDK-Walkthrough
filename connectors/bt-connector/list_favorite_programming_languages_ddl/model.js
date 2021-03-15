const { DDL } = require('@trayio/connector-utils');

module.exports = async params => {
	const response = await falafel.btConnector.listQuestions(params);
	const question = response.results.find(r => r.id === 1);
	return DDL(question.choices, 'choice', 'votes');
};