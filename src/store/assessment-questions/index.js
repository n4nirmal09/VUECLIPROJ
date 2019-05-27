export default {
	state: {
		questions:[{
			title: "what is you're name?"
		},{
			title: "What is my name?"
		}]
	},
	mutations:{

	},
	action: {

	},
	getters: {
		getQuestions(state){
			return state.questions
		}
	}
}