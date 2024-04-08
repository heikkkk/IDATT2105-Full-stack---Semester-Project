import axios from 'axios'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/UserStore.js'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState);
const app = createApp(App)
app.use(pinia)

/**
 * The reference to the username input field.
 */
const usernameRef = ref('')
/**
 * The reference to the password input field.
 */
const passwordRef = ref('')
/**
 * The computed property representing the authentication configuration.
 */
const authConfig = computed(() => ({
  auth: {
    username: usernameRef.value,
    password: passwordRef.value
  }
}))

/**
 * Parses the response data and updates the user store with the username and token.
 *
 * @param response the response object received from the login request
 * @return the response object
 */
function parseResponse(response) {
  const userStore = useUserStore()
  userStore.setUsername(response.data.user_name)
  userStore.setToken(response.data.access_token)
  return response; // Return the response
}

/**
 * Sends a login request with the provided authentication configuration.
 *
 * @return a promise representing the result of the login operation
 * @throws Error if an error occurs while logging in
 */
export async function login() {
  try {
    const response = await axios.post('http://localhost:8080/sign-in', {}, authConfig.value);
    return parseResponse(response);
  } catch (error) {
    throw error; // Throw error to propagate it to the caller
  }
}

export { usernameRef, passwordRef }
