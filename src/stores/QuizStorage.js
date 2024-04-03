import { defineStore } from 'pinia'

export const useQuizStore = defineStore({
  id: 'QuizStore',
  state: () => ({
    activeQuiz: null
  }),
  actions: {
    setActiveQuiz(newQuiz) {
      this.activeQuiz = newQuiz;
    }
  },
  getters: {
    getActiveQuiz() {
      return this.activeQuiz
    }
  },

  persist: {
    storage: sessionStorage
  }
})