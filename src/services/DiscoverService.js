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

export async function getQuizzesByKeywordAndAuthor(keyword) {
  try {
    return await apiClient.get("/keyword/" + keyword, config)
  } catch (error) {
    throw new Error('An error occurred while fetching quiz\'s by a user : ' + error.response.statusText);
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

const categoryImageMapper = {
  1: "src/assets/img/categories/science.png",
  2: "src/assets/img/categories/math.png",
  3: "src/assets/img/categories/history.png",
  4: "src/assets/img/categories/sport.png",
  5: "src/assets/img/categories/film.png",
  6: "src/assets/img/categories/food.png"
}

export const categoryMapper = {
  1: "Science",
  2: "Math",
  3: "History",
  4: "Sport",
  5: "Film",
  6: "Food"
}

export function getCategoryImage(categoryId) {
  return categoryImageMapper[categoryId]
}