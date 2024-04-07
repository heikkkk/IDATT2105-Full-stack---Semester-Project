import axios from 'axios'
import { useUserStore } from '@/stores/UserStore.js'

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
 * Retrieves quizzes associated with the current user.
 *
 * @return a promise representing the result of the operation
 * @throws Error if an error occurs while fetching quizzes by the user
 */
export async function getQuizesByUser() {
  try {
    return await apiClient.get("/user/" + useUserStore().getUsername, config)
  } catch (error) {
    throw new Error('An error occurred while fetching quiz\'s by a user : ' + error.response.statusText);
  }
}

/**
 * Retrieves public quizzes.
 *
 * @return a promise representing the result of the operation
 * @throws Error if an error occurs while fetching public quizzes
 */
export async function getPublicQuizzes() {
  try {
    return await apiClient.get("/public", config)
  } catch (error) {
    throw new Error('An error occurred while fetching public quiz\'s : ' + error.response.statusText);
  }
}

/**
 * Retrieves a quiz by its ID.
 *
 * @param id the ID of the quiz to retrieve
 * @return a promise representing the result of the operation
 * @throws Error if an error occurs while fetching the quiz
 */
export async function getQuizById(id) {
  try {
    return await apiClient.get("/" + id, config)
  } catch (error) {
    throw new Error('An error occurred while fetching public quiz\'s : ' + error.response.statusText);
  }
}

/**
 * Maps category IDs to their respective image file paths.
 */
const categoryImageMapper = {
  1: "src/assets/img/categories/science.png",
  2: "src/assets/img/categories/math.png",
  3: "src/assets/img/categories/history.png",
  4: "src/assets/img/categories/sport.png",
  5: "src/assets/img/categories/film.png",
  6: "src/assets/img/categories/food.png"
}

/**
 * Maps category IDs to category names.
 */
export const categoryMapper = {
  1: "Science",
  2: "Math",
  3: "History",
  4: "Sport",
  5: "Film",
  6: "Food"
}

/**
 * Maps category names to category IDs.
 */
export const reversedCategoryMapper = {
  "Science": 1,
  "Math": 2,
  "History": 3,
  "Sport": 4,
  "Film": 5,
  "Food": 6
};

/**
 * Retrieves the image path associated with a given category ID.
 *
 * @param categoryId the ID of the category
 * @return the image path for the category
 */
export function getCategoryImage(categoryId) {
  return categoryImageMapper[categoryId]
}

/**
 * Checks if the user has proper clearance to access certain functionalities.
 *
 * @return true if the user's clearance is invalid, false otherwise
 */
export function checkBadUserClearance() {
  return (useUserStore().getToken == null || useUserStore().getUsername == null)
}