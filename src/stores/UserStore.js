import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'UserStore',
  state: () => ({
    userId: null,
    username: null,
    userPicturePath: null,
    token: null,

  }),
  actions: {
    setUserId(newValue) {
      this.userId = newValue;
    },
    setUsername(newValue) {
      this.username = newValue;
    },
    setToken(newToken) {
      this.token = newToken;
    },
    setUserPicturePath(newPath) {
      this.token = newPath;
    },
    resetAll() {
      this.userId = null;
      this.username = null;
      this.token = null;
      this.userPicturePath = null;
    }
  },
  getters: {
    getUserId() {
      return this.userId;
    },

    getUsername() {
      return this.username;
    },

    getToken() {
      return this.token;
    },

    getPath() {
      return this.userPicturePath;
    },

    isActive() {
      return this.username!= null;
    },
    controlNavigate() {
      if (this.isActive()) {
        return '/discover'
      }
      return '/'
    }
  },

  persist: {
    storage: sessionStorage
  }
})