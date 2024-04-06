import axios from 'axios'
import { ref } from 'vue'
import { useUserStore } from '@/stores/UserStore.js'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'
const pinia = createPinia()
pinia.use(piniaPluginPersistedState);
const app = createApp(App)
app.use(pinia)

const userObject = (username, email, password) => ({
  "username": username,
  "email": email,
  "password": password,
  "roleId": 2
})

function parseResponse(response) {
  const userStore = useUserStore()

  userStore.setUsername(response.data.user_name)
  userStore.setToken(response.data.access_token)
  return response; // Return the response
}

export function postLoginCredentials(username, email, password) {
  console.log(userObject(username, email, password))
  return axios.post('http://localhost:8080/sign-up', userObject(username, email, password))
    .then(response => {
      return parseResponse(response)
    })
    .catch(error => {
      throw error; // Throw error to propagate it to the caller
    })
}

export function signUp(values) {
  const username = values.username
  const email = values.email
  const password = values.password
  return postLoginCredentials(username, email, password)
}
