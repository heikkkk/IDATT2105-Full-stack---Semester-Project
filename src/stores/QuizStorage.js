import { defineStore } from 'pinia'

export const useQuizStore = defineStore({
  id: 'QuizStore',
  state: () => ({
    activeQuiz: null,
    points: 0,
    questions: 0,
    trueTexts: null,
    answers : null

  }),
  actions: {
    setActiveQuiz(newQuiz) {
      this.activeQuiz = newQuiz;
    },
    setPoints(points){
      this.points = points
    },
    setQuestionsLength(questions){
      this.questions = questions
    },
    setTrueText(text){
      this.trueTexts = text
    },
    setAnswers(answers){
      this.answers = answers
    }
  },
  getters: {
    getActiveQuiz() {
      return this.activeQuiz
    },
    getPoints() {
      return this.points
    },
    getQuestions(){
      return this.questions
    },
    getTrueText(){
     return this.trueTexts
    },
    getAnswers(){
      return this.answers
    }
  },

  persist: {
    storage: sessionStorage
  }
})