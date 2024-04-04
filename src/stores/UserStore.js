import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'UserStore',
  state: () => ({
    username: null,
    userPicturePath: null,
    token: null,

  }),
  actions: {
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
      this.username = null;
      this.token = null;
      this.userPicturePath = null;
    }
  },
  getters: {
    getUsername() {
      return this.username;
    },

    getToken() {
      return this.token;
    },

    getPath() {
      return this.userPicturePath;
    },
    // Todo might wanna alter this one
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