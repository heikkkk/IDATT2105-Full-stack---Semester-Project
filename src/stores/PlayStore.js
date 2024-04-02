import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'UserStore',
  state: () => ({
    check: null,
    userPicturePath: null,
    token: null

  }),
  actions: {
    setCheckExit(checkValue) {
      this.check = checkValue;
    }
  },
  getters: {
    getCheckExit() {
      return this.check;
    }
  },
})