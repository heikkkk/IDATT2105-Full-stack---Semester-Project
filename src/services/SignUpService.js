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

const userStore = useUserStore()

const username = ref('')
const password = ref('')
const email = ref('')
const authenticationError = ref(false)

const userObject = computed(() => ({
  "username": username.value,
  "password": password.value,
  "email": email.value,
  "roleId": 2
}))

function parseResponse(response) {
  userStore.setUsername(response.data.user_name)
  userStore.setToken(response.data.access_token)
  return response; // Return the response
}

export function postLoginCredentials() {
  return axios.post('http://localhost:8080/sign-up', userObject.value)
    .then(response => {
      return parseResponse(response, userStore)
    })
    .catch(error => {
      authenticationError.value = true
      throw error; // Throw error to propagate it to the caller
    })
}

export function signUp() {
  return postLoginCredentials()
}

export { username, password, email, authenticationError }
