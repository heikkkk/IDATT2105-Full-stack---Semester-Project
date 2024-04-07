import { defineStore } from 'pinia'
import { useQuestionStore } from '@/stores/QuestionStore.js'
import { useUserStore } from '@/stores/UserStore.js'

/**
 * Represents the Quiz Store, which manages the state of quizzes.
 */
export const useQuizStore = defineStore({
  id: 'QuizStore',
  state: () => ({
    /**
     * The active quiz being managed by the store.
     */
    activeQuiz: {
      categoryId: 1,
      created_at: null,
      description: "",
      isPublic: true,
      mediaId: 1,
      questions: [{
        "questionId": useQuestionStore().getGenericId,
        "questionName": "",
        "questionText": "",
        "explanations": "",
        "question_duration": 60,
        "isPublic": true,
        "difficultyId": 1,
        "mediaId": 1,
        "typeId": 1,
        "answers": []
      }],
      quizId: useQuestionStore().getGenericId,
      templateId: 1,
      title: "My new quiz",
      userId: useUserStore().getUserId
    },
    /**
     * The count of correct questions.
     */
    correctQuestionCount: 0,
    /**
     * Flag indicating if the final question has been reached.
     */
    finalQuestion: false,
    /**
     * The search results of quizzes.
     */
    searchResult: []
  }),
  actions: {
    /**
     * Sets the active quiz.
     *
     * @param newQuiz the new active quiz
     */
    setActiveQuiz(newQuiz) {
      this.activeQuiz = newQuiz;
    },
    /**
     * Resets the quiz to its initial state.
     */
    resetQuiz() {
      this.activeQuiz = {
        categoryId: 1,
        created_at: "",
        description: "",
        isPublic: true,
        mediaId: 1,
        questions: [{
          "questionId": useQuestionStore().getGenericId,
          "questionName": "",
          "questionText": "",
          "explanations": "",
          "question_duration": 60,
          "isPublic": true,
          "difficultyId": 1,
          "mediaId": 1,
          "typeId": 1,
          "answers": []
        }],
        quizId: useQuestionStore().getGenericId,
        templateId: 1,
        title: "My new quiz",
        userId: useUserStore().getUserId
      }
    },
    /**
     * Sets the count of correct questions.
     *
     * @param newValue the new value for correct question count
     */
    setCorrectQuestionCount(newValue) {
      this.correctQuestionCount = newValue
    },
    /**
     * Increments the count of correct questions by 1.
     */
    incrementCorrectQuestionCount() {
      this.correctQuestionCount++
    },
    /**
     * Sets the flag indicating if the final question has been reached.
     *
     * @param newValue the new value for final question flag
     */
    setFinalQuestion(newValue) {
      this.finalQuestion = newValue
    },
    /**
     * Sets the search results.
     *
     * @param newValue the new search results
     */
    setSearchResults(newValue) {
      this.searchResult = newValue
    }
  },
  getters: {
    /**
     * Returns the active quiz.
     *
     * @return the active quiz
     */
    getActiveQuiz() {
      return this.activeQuiz
    },
    /**
     * Returns the count of correct questions.
     *
     * @return the count of correct questions
     */
    getCorrectQuestionCount() {
      return this.correctQuestionCount
    },
    /**
     * Checks if the final question has been reached.
     *
     * @return true if the final question has been reached, false otherwise
     */
    isFinalQuestion() {
      return this.finalQuestion
    },
    /**
     * Returns the search results.
     *
     * @return the search results
     */
    getSearchResults() {
      return this.searchResult
    }
  },

  persist: {
    storage: sessionStorage
  }
})