import { defineStore } from 'pinia'

export const useQuizStore = defineStore({
  id: 'QuizStore',
  state: () => ({
    ActiveQuiz: {
      quizId: 0,
      title: '',
      description: '',
      isPublic: false,
      createdAt: null,
      questions: []
    }
  }),
  actions: {

  },
  getters: {

  },

  persist: {
    storage: sessionStorage
  }
})