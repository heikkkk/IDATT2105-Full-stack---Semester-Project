import axios from 'axios'
import { ref } from 'vue'
import { useUserStore } from '@/stores/UserStore.js'

/**
 * The username entered by the user.
 */
const username = ref('')
/**
 * The password entered by the user.
 */
const password = ref('')
/**
 * The email entered by the user.
 */
const email = ref('')
/**
 * The UserStore used for managing user state.
 */
const userStore = useUserStore()

/**
 * Constructs a new user object with the specified username, email, and password.
 *
 * @param username the username entered by the user
 * @param email the email entered by the user
 * @param password the password entered by the user
 */
const userObject = (username, email, password) => ({
  "username": username,
  "email": email,
  "password": password,
  "roleId": 2 // Default user privileges
})

/**
 * Parses the response from the server and updates the user store with the retrieved data.
 *
 * @param response the response received from the server
 * @return the parsed response
 */
function parseResponse(response) {
  userStore.setUsername(response.data.user_name)
  userStore.setToken(response.data.access_token)
  return response; // Return the response
}

/**
 * Sends a POST request to the server with the provided login credentials.
 *
 * @param username the username of the user
 * @param email the email of the user
 * @param password the password of the user
 * @return a Promise representing the asynchronous HTTP request
 */
export function postLoginCredentials(username, email, password) {
  return axios.post('http://localhost:8080/sign-up', userObject(username, email, password))
    .then(response => {
      return parseResponse(response, userStore)
    })
    .catch(error => {
      throw error; // Throw error to propagate it to the caller
    })
}

/**
 * Signs up a user with the provided values.
 *
 * @param values an object containing the username, email, and password of the user
 * @return a Promise representing the asynchronous sign-up process
 */
export function signUp(values) {
  const username = values.username
  const email = values.email
  const password = values.password
  return postLoginCredentials(username, email, password)
}

export { username, password, email }
