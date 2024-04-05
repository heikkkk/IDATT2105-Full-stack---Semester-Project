import { defineStore } from 'pinia'
import { useQuestionStore } from '@/stores/QuestionStore.js'
import { getIdByUsername } from '@/services/QuizInfoService.js'
import { useUserStore } from '@/stores/UserStore.js'

export const useQuizStore = defineStore({
  id: 'QuizStore',
  state: () => ({
    activeQuiz: {
      categoryId: 1,
      created_at: null,
      description: "",
      isPublic: true,
      mediaId: 1,
      questions: [],
      quizId: useQuestionStore().getGenericId,
      templateId: 1,
      title: "My new quiz",
      userId: useUserStore().getUserId
    },
    correctQuestionCount: 0,
    finalQuestion: false
  }),
  actions: {
    setActiveQuiz(newQuiz) {
      this.activeQuiz = newQuiz;
    },
    resetQuiz() {
      this.activeQuiz = {
        categoryId: 1,
        created_at: "",
        description: "",
        isPublic: true,
        mediaId: 1,
        questions: [],
        quizId: useQuestionStore().getGenericId,
        templateId: 1,
        title: "My new quiz",
        userId: useUserStore().getUserId
      }
    },
    setCorrectQuestionCount(newValue) {
      this.correctQuestionCount = newValue
    },
    incrementCorrectQuestionCount() {
      this.correctQuestionCount++
    },
    setFinalQuestion(newValue) {
      this.finalQuestion = newValue
    }
  },
  getters: {
    getActiveQuiz() {
      return this.activeQuiz
    },
    getCorrectQuestionCount() {
      return this.correctQuestionCount
    },
    isFinalQuestion() {
      return this.finalQuestion
    }
  },

  persist: {
    storage: sessionStorage
  }
})