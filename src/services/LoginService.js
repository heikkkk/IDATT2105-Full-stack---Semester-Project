import axios from 'axios'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/UserStore.js'
import { getIdByUsername } from '@/services/QuizInfoService.js'

const username = ref('')
const password = ref('')
const authenticationError = ref(false)
const userStore = useUserStore()

const authConfig = computed(() => ({
  auth: {
    username: username.value,
    password: password.value
  }
}))

function parseResponse(response) {
  userStore.setUsername(response.data.user_name)
  userStore.setToken(response.data.access_token)
  return response; // Return the response
}

export function postLoginCredentials() {
  return axios.post('http://localhost:8080/sign-in', {}, authConfig.value)
    .then(response => {
      return parseResponse(response, userStore)
    })
    .catch(error => {
      authenticationError.value = true
      throw error; // Throw error to propagate it to the caller
    })
}

export function login() {
  return postLoginCredentials()
}

export { username, password, authenticationError }
