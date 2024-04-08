import { useQuestionStore } from '@/stores/QuestionStore.js'
import { useQuizStore } from '@/stores/QuizStore.js'
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
 * Saves the active quiz.
 *
 * @return {Promise} A promise representing the result of the save operation.
 * @throws {Error} If an error occurs while saving the quiz.
 */
export async function saveQuiz() {
  try {
    return await apiClient.post("/updateQuiz", useQuizStore().getActiveQuiz, config)
  } catch (error) {
    throw new Error('An error occurred while saving quiz\'s : ' + error.response.statusText);
  }
}

/**
 * Deletes a quiz by its ID.
 *
 * @param {number} quizId The ID of the quiz to delete.
 * @return {Promise} A promise representing the result of the delete operation.
 * @throws {Error} If an error occurs while deleting the quiz.
 */
export async function deleteQuiz(quizId) {
  try {
    return await apiClient.put("/delete-quiz/" + quizId, null, config)
  } catch (error) {
    throw new Error('An error occurred while saving quiz\'s : ' + error.response.statusText);
  }
}

/**
 * Returns a default question object.
 *
 * @return {Object} A new question object.
 */
export function getNewQuestion() {
  return {
    "questionId": useQuestionStore().getGenericId,
    "questionName": "",
    "questionText": "",
    "explanations": "",
    "question_duration": 60,
    "isPublic": true,
    "difficultyId": 1,
    "mediaId": 1,
    "typeId": 1,
    "answers": []
  };
}

/**
 * Returns the active question.
 *
 * @return {Object} The active question.
 */
export function getActiveQuestion() {
  const questionId = useQuestionStore().getActiveQuestionId
  const questions = useQuizStore().getActiveQuiz.questions
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].questionId === questionId) {
      return questions[i];
    }
  }
}

/**
 * Updates the ID of the active question.
 */
export function updateId() {
  const activeQuestion = getActiveQuestion()
  activeQuestion['questionId'] = useQuestionStore().getGenericId
  useQuestionStore().setActiveQuestionId(activeQuestion['questionId'])
}

/**
 * Updates answers in the current question.
 *
 * @param {Array} listOfAnswers List of answers.
 * @param {Array} listOfCheckedAnswers List of answers isCorrect value.
 */
export function storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers) {
  updateId()
  console.log(getActiveQuestion().answers)
  for (let i = 0; i < listOfAnswers.length; i++) {
    if (i < getActiveQuestion().answers.length) {
      console.log(listOfAnswers[i].value)
      getActiveQuestion().answers[i] =
        {
          'answerId': useQuestionStore().getGenericId,
          'answerText': listOfAnswers[i].value,
          'isCorrect': listOfCheckedAnswers[i].value
        }
    }
    else {
      getActiveQuestion().answers.push(
        {
          'answerId': useQuestionStore().getGenericId,
          'answerText': listOfAnswers[i].value,
          'isCorrect': listOfCheckedAnswers[i].value
        })
    }
  }
}

/**
 * Updates the text of the active question.
 *
 * @param {string} questionText The new question text.
 */
export function storeUpdateQuestionText(questionText) {
  updateId()
  const activeQuestion = getActiveQuestion()
  activeQuestion['questionText'] = questionText;
}

/**
 * Updates the title of the active question.
 *
 * @param {string} questionTitle The new question title.
 */
export function storeUpdateQuestionTitle(questionTitle) {
  updateId()
  const activeQuestion = getActiveQuestion()
  activeQuestion['questionName'] = questionTitle;
}

/**
 * Updates the time limit of the active question.
 *
 * @param {number} timeLimit The new time limit.
 */
export function storeUpdateTimeLimit(timeLimit) {
  updateId()
  const activeQuestion = getActiveQuestion()
  activeQuestion['question_duration'] = timeLimit;
}

/**
 * Updates the difficulty of the active question.
 *
 * @param {string} difficulty The new difficulty level ("Easy", "Medium", or "Hard").
 */
export function storeUpdateDifficulty(difficulty) {
  updateId()
  const activeQuestion = getActiveQuestion()
  if (difficulty === "Easy") {
    activeQuestion['difficultyId'] = 1;
  } else if (difficulty === "Medium") {
    activeQuestion['difficultyId'] = 2;
  } else if (difficulty === "Hard") {
    activeQuestion['difficultyId'] = 3;
  }
}

/**
 * Updates the explanation of the active question.
 *
 * @param {string} explanation The new explanation.
 */
export function storeUpdateExplanation(explanation) {
  updateId()
  const activeQuestion = getActiveQuestion();
  activeQuestion['explanations'] = explanation;
}