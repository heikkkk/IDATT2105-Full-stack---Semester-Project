import axios from 'axios'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/UserStore.js'

const username = ref('')
const password = ref('')
const email = ref('')
const userStore = useUserStore()

const userObject = (username, email, password) => ({
  "username": username,
  "email": email,
  "password": password,
  "roleId": 2
})

function parseResponse(response) {
  userStore.setUsername(response.data.user_name)
  userStore.setToken(response.data.access_token)
  return response; // Return the response
}

export function postLoginCredentials(username, email, password) {
  console.log(userObject(username, email, password))
  return axios.post('http://localhost:8080/sign-up', )
    .then(response => {
      return parseResponse(response, userStore)
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

export { username, password, email }
