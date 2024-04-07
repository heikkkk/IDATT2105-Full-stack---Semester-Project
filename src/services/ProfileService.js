import axios from 'axios'
import { useUserStore } from '@/stores/UserStore.js'

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/users',
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

export async function updateUsername(userId, newUsername, password) {
  try {
    return await apiClient.put("/update-username/" + userId + "/" + newUsername, null, config)
  } catch (error) {
    throw new Error('An error occurred while fetching username\'s : ' + error.response.statusText);
  }
}

export async function updatePassword(userId, newPassword) {
  try {
    return await apiClient.put("/update-password/" + userId + "/" + newPassword,null, config)
  } catch (error) {
    throw new Error('An error occurred while fetching username\'s : ' + error.response.statusText);
  }
}



export async function refreshToken(newUsername, confirmPassword) {
  try {
    const password = confirmPassword
    const authConfig = {
      "auth": {
        "username": newUsername,
        "password": password
      }
    }
    console.log(newUsername, password)
    const response = await axios.post('http://localhost:8080/sign-in', {}, authConfig);
    useUserStore().setUsername(response.data.user_name)
    useUserStore().setToken(response.data.access_token)
    return response
  } catch (error) {
    throw error;
  }
}