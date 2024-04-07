import axios from 'axios'
import { useUserStore } from '@/stores/UserStore.js'

// Must set this up in order to avoid pinia-not-initialized error message.
// This can happen due to that the SearchBar component is initialized from
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'
const pinia = createPinia()
pinia.use(piniaPluginPersistedState);
const app = createApp(App)
app.use(pinia)

/**
 * The Axios HTTP client used for making API requests.
 */
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/quizzes',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

/**
 * The configuration object containing request headers.
 */
const config = {
  headers: {
    'Authorization' : 'Bearer ' + useUserStore().getToken
  }
}


/**
 * Fetches quizzes by title keyword from the API.
 *
 * @param keyword the keyword to search for in quiz titles
 * @return a Promise representing the asynchronous HTTP request
 * @throws Error if an error occurs while fetching quizzes
 */
export async function getQuizzesByTitleKeyword(keyword) {
  try {
    return await apiClient.get("/keyword/" + keyword, config)
  } catch (error) {
    throw new Error('An error occurred while fetching quiz\'s by a user : ' + error.response.statusText);
  }
}

/**
 * Fetches quizzes by category from the API.
 *
 * @param category the category of quizzes to fetch
 * @return a Promise representing the asynchronous HTTP request
 * @throws Error if an error occurs while fetching quizzes
 */
export async function getQuizzesByCategory(category) {
  try {
    return await apiClient.get("/category/" + category, config)
  } catch (error) {
    throw new Error('An error occurred while fetching quiz\'s by a user : ' + error.response.statusText);
  }
}

/**
 * Fetches quizzes by author from the API.
 *
 * @param author the author of the quizzes to fetch
 * @return a Promise representing the asynchronous HTTP request
 * @throws Error if an error occurs while fetching quizzes
 */
export async function getQuizzesByAuthor(author) {
  try {
    return await apiClient.get("/quiz-by-author/" + author, config)
  } catch (error) {
    throw new Error('An error occurred while fetching quiz\'s by a user : ' + error.response.statusText);
  }
}
