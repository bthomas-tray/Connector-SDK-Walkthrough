module.exports = {
	method: 'post',
	url: '/questions',
	data: {
		question: '{{questionTitle}}',
		choices: '{{questionChoices}}'
	}
};