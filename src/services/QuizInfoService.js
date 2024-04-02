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

export async function getUsernameById(id) {
  try {
    return await apiClient.get("/username/" + id, config)
  } catch (error) {
    throw new Error('An error occurred while fetching username\'s : ' + error.response.statusText);
  }
}

export async function getIdByUsername(username) {
  try {
    return await apiClient.get("/userId/" + username, config)
  } catch (error) {
    throw new Error('An error occurred while fetching userId\'s : ' + error.response.statusText);
  }
}

export async function getCategoryById(id) {
  try {
    return await apiClient.get("/category/" + id, config)
  } catch (error) {
    throw new Error('An error occurred while fetching category\'s : ' + error.response.statusText);
  }
}

export async function getMediaById(id) {
  try {
    return await apiClient.get("/media/" + id, config)
  } catch (error) {
    throw new Error('An error occurred while fetching media\'s : ' + error.response.statusText);
  }
}