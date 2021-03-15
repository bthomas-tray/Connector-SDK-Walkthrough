module.exports = {
	description: 'Create a new question',

	input: {
		questionTitle: {
			type: 'string', // request body is always stringified {{object}}
			description: 'The name of the question you would like to ask',
			required: true
		},
		questionChoices: {
			type: 'string',
			description: "List of Choices to select from",
			required: true
		}
	},
};