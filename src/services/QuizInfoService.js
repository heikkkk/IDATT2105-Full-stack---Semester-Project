import axios from 'axios'
import { useUserStore } from '@/stores/UserStore.js'

/**
 * The Axios HTTP client used for making API requests.
 */
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
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
 * Fetches the username by user ID from the API.
 *
 * @param id the ID of the user
 * @return the username associated with the given ID
 * @throws Error if an error occurs while fetching the username
 */
export async function getUsernameById(id) {
  try {
    const response = await apiClient.get("/users/get-name/" + id, config)
    return response.data
  } catch (error) {
    throw new Error('An error occurred while fetching username\'s : ' + error.response.statusText);
  }
}

/**
 * Fetches the user ID by username from the API.
 *
 * @param username the username of the user
 * @return the ID associated with the given username
 * @throws Error if an error occurs while fetching the user ID
 */
export async function getIdByUsername(username) {
  try {
    return await apiClient.get("/users/get-id/" + username, config)
  } catch (error) {
    throw new Error('An error occurred while fetching userId\'s : ' + error.response.statusText);
  }
}

/**
 * Fetches the category by ID from the API.
 *
 * @param id the ID of the category
 * @return the category associated with the given ID
 * @throws Error if an error occurs while fetching the category
 */
export async function getCategoryById(id) {
  try {
    const response = await apiClient.get("/quizzes/id/category/" + id, config)
    return response.data
  } catch (error) {
    throw new Error('An error occurred while fetching category\'s : ' + error.response.statusText);
  }
}