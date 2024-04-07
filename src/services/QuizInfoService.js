import axios from 'axios'
import { useUserStore } from '@/stores/UserStore.js'

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
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

export async function getUsernameById(id) {
  try {
    const response = await apiClient.get("/users/get-name/" + id, config)
    return response.data
  } catch (error) {
    throw new Error('An error occurred while fetching username\'s : ' + error.response.statusText);
  }
}

export async function getIdByUsername(username) {
  try {
    return await apiClient.get("/users/get-id/" + username, config)
  } catch (error) {
    throw new Error('An error occurred while fetching userId\'s : ' + error.response.statusText);
  }
}

export async function getCategoryById(id) {
  try {
    const response = await apiClient.get("/quizzes/id/category/" + id, config)
    return response.data
  } catch (error) {
    throw new Error('An error occurred while fetching category\'s : ' + error.response.statusText);
  }
}