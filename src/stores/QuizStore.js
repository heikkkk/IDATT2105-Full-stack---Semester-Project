import { defineStore } from 'pinia'
import { useQuestionStore } from '@/stores/QuestionStore.js'
import { getIdByUsername } from '@/services/QuizInfoService.js'
import { useUserStore } from '@/stores/UserStore.js'

export const useQuizStore = defineStore({
  id: 'QuizStore',
  state: () => ({
    activeQuiz: {
      categoryId: 1,
      created_at: "",
      description: "",
      isPublic: true,
      mediaId: 1,
      questions: [],
      quizId: useQuestionStore().getGenericId,
      templateId: 1,
      title: "My new quiz",
      userId: getIdByUsername(useUserStore().getUsername)
    }
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
        userId: getIdByUsername(useUserStore().getUsername)
      }
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