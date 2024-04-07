import axios from 'axios'
import { useUserStore } from '@/stores/UserStore.js'

/**
 * The Axios HTTP client used for making API requests.
 */
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/users',
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
 * Updates the username of a user.
 *
 * @param userId the ID of the user
 * @param newUsername the new username to be set
 * @return a promise representing the result of the update operation
 * @throws Error if an error occurs while updating the username
 */
export async function updateUsername(userId, newUsername) {
  try {
    return await apiClient.put("/update-username/" + userId + "/" + newUsername, null, config)
  } catch (error) {
    throw new Error('An error occurred while fetching username\'s : ' + error.response.statusText);
  }
}

/**
 * Updates the password of a user.
 *
 * @param userId the ID of the user
 * @param newPassword the new password to be set
 * @return a promise representing the result of the update operation
 * @throws Error if an error occurs while updating the password
 */
export async function updatePassword(userId, newPassword) {
  try {
    return await apiClient.put("/update-password/" + userId + "/" + newPassword,null, config)
  } catch (error) {
    throw new Error('An error occurred while fetching username\'s : ' + error.response.statusText);
  }
}


/**
 * Refreshes the user's token by re-logging into the website.
 *
 * @param newUsername the new username
 * @param confirmPassword the password for confirming the action
 * @return a promise representing the result of the token refresh operation
 * @throws Error if an error occurs while refreshing the token
 */
export async function refreshToken(newUsername, confirmPassword) {
  try {
    const authConfig = {
      "auth": {
        "username": newUsername,
        "password": confirmPassword
      }
    }
    const response = await axios.post('http://localhost:8080/sign-in', {}, authConfig);
    // Sets the user's username and token
    useUserStore().setUsername(response.data.user_name)
    useUserStore().setToken(response.data.access_token)
    return response
  } catch (error) {
    throw error;
  }
}