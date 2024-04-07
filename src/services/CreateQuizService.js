import { useQuestionStore } from '@/stores/QuestionStore.js'
import { useQuizStore } from '@/stores/QuizStore.js'
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

export async function saveQuiz() {
  try {
    return await apiClient.post("/updateQuiz", useQuizStore().getActiveQuiz, config)
  } catch (error) {
    throw new Error('An error occurred while saving quiz\'s : ' + error.response.statusText);
  }
}

export async function deleteQuiz(quizId) {
  try {
    console.log(config)
    return await apiClient.put("/delete-quiz/" + quizId, null, config)
  } catch (error) {
    throw new Error('An error occurred while saving quiz\'s : ' + error.response.statusText);
  }
}

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

export function getActiveQuestion() {
  const questionId = useQuestionStore().getActiveQuestionId
  const questions = useQuizStore().getActiveQuiz.questions
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].questionId === questionId) {
      return questions[i];
    }
  }
}

export function removeAnswer(answerIndex) {
  getActiveQuestion().answers.splice(answerIndex, 1);
}

export function updateId() {
  const activeQuestion = getActiveQuestion()
  activeQuestion['questionId'] = useQuestionStore().getGenericId
  useQuestionStore().setActiveQuestionId(activeQuestion['questionId'])
}

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

export function storeUpdateQuestionText(questionText) {
  updateId()
  const activeQuestion = getActiveQuestion()
  activeQuestion['questionText'] = questionText;
}

export function storeUpdateQuestionTitle(questionTitle) {
  updateId()
  const activeQuestion = getActiveQuestion()
  activeQuestion['questionName'] = questionTitle;
}

export function storeUpdateTimeLimit(timeLimit) {
  updateId()
  const activeQuestion = getActiveQuestion()
  activeQuestion['question_duration'] = timeLimit;
}

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

export function storeUpdateExplanation(explanation) {
  updateId()
  const activeQuestion = getActiveQuestion();
  activeQuestion['explanations'] = explanation;
}