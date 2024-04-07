import { defineStore } from 'pinia'

/**
 * Represents the user store.
 */
export const useUserStore = defineStore({
  id: 'UserStore',
  state: () => ({
    /** The user's ID. */
    userId: null,
    /** The user's username. */
    username: null,
    /** The path to the user's picture. */
    userPicturePath: null,
    /** The user's authentication token. */
    token: null,

  }),
  actions: {
    /**
     * Sets the user's ID.
     * @param {string} newValue - The new user ID.
     */
    setUserId(newValue) {
      this.userId = newValue;
    },
    /**
     * Sets the user's username.
     * @param {string} newValue - The new user ID.
     */
    setUsername(newValue) {
      this.username = newValue;
    },
    /**
     * Sets the user's token.
     * @param {string} newToken - The new user token.
     */
    setToken(newToken) {
      this.token = newToken;
    },
    /**
     * Sets the user's picture path.
     * @param {string} newPath - The new path to the user's picture.
     */
    setUserPicturePath(newPath) {
      this.token = newPath;
    },

    /**
     * Resets all state properties to null.
     */
    resetAll() {
      this.userId = null;
      this.username = null;
      this.token = null;
      this.userPicturePath = null;
    }
  },
  getters: {
    /**
     * Gets the user's ID.
     * @returns {string|null} The user's ID.
     */
    getUserId() {
      return this.userId;
    },
    /**
     * Gets the user's username.
     * @returns {string|null} The user's username.
     */
    getUsername() {
      return this.username;
    },
    /**
     * Gets the user's authentication token.
     * @returns {string|null} The user's authentication token.
     */
    getToken() {
      return this.token;
    },
    /**
     * Gets the path to the user's picture.
     * @returns {string|null} The path to the user's picture.
     */
    getPath() {
      return this.userPicturePath;
    },
    /**
     * Checks if the user is active.
     * @returns {boolean} True if the user is active, false otherwise.
     */
    isActive() {
      return this.username!= null;
    },
    /**
     * Controls navigation based on user activity.
     * @returns {string} The navigation path.
     */
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