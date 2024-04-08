import { defineStore } from 'pinia'

/**
 * Represents the Question Store, which manages the state of questions.
 */
export const useQuestionStore = defineStore({
  id: 'QuestionStore',
  state: () => ({
    /**
     * The ID of the active question.
     */
    activeQuestionId: 0,
    /**
     * A generic ID used for specifying a new change in attribute.
     */
    genericId: -1
  }),
  actions: {
    /**
     * Sets the ID of the active question.
     *
     * @param newValue the new value for active question ID
     */
    setActiveQuestionId(newValue) {
      this.activeQuestionId = newValue;
    }
  },
  getters: {
    /**
     * Gets the ID of the active question.
     *
     * @return the ID of the active question
     */
    getActiveQuestionId() {
      return this.activeQuestionId
    },
    /**
     * Gets a generic ID for specifying a new change in attribute.
     *
     * @return the generic ID
     */
    getGenericId() {
      this.genericId -= 1
      return this.genericId
    },
  },

  persist: {
    storage: sessionStorage
  }
})