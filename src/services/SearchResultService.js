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

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/quizzes',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const config = {
  headers: {
    'Authorization' : 'Bearer ' + useUserStore().getToken
  }
}

export async function getQuizzesByTitleKeyword(keyword) {
  try {
    return await apiClient.get("/keyword/" + keyword, config)
  } catch (error) {
    throw new Error('An error occurred while fetching quiz\'s by a user : ' + error.response.statusText);
  }
}

export async function getQuizzesByCategory(category) {
  try {
    return await apiClient.get("/category/" + category, config)
  } catch (error) {
    throw new Error('An error occurred while fetching quiz\'s by a user : ' + error.response.statusText);
  }
}

export async function getQuizzesByAuthor(author) {
  try {
    return await apiClient.get("/quiz-by-author/" + author, config)
  } catch (error) {
    throw new Error('An error occurred while fetching quiz\'s by a user : ' + error.response.statusText);
  }
}
