import axios from 'axios'
import { useUserStore } from '@/stores/UserStore.js'

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

export async function getQuizesByUser() {
  try {
    return await apiClient.get("/user/" + useUserStore().getUsername, config)
  } catch (error) {
    throw new Error('An error occurred while fetching quiz\'s by a user : ' + error.response.statusText);
  }
}

export async function getPublicQuizzes() {
  try {
    return await apiClient.get("/public", config)
  } catch (error) {
    throw new Error('An error occurred while fetching public quiz\'s : ' + error.response.statusText);
  }
}

export async function getQuizById(id) {
  try {
    return await apiClient.get("/" + id, config)
  } catch (error) {
    throw new Error('An error occurred while fetching public quiz\'s : ' + error.response.statusText);
  }
}