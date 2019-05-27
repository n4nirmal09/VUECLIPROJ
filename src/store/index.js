import Vue from "vue"
import Vuex from 'vuex'

import assessmentQuestions from './assessment-questions'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		assessmentQuestions: assessmentQuestions
	}
})