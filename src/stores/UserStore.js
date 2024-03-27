import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'UserStore',
  state: () => ({
    activeUsername: null,
    token: null

  }),
  actions: {
    setActiveUser(newValue) {
      this.activeUsername = newValue;
    },
    setToken(newToken) {
      this.token = newToken;
    },
    resetAll() {
      this.activeUsername = null;
      this.token = null;
    }
  },
  getters: {
    getActiveUser() {
      return this.activeUsername;
    },

    getToken() {
      return this.token;
    }
  },

  persist: {
    storage: sessionStorage
  }
})