<script setup>
import VerticalQuestionBar from '@/components/CreateQuiz/VerticalQuestionBar.vue'
import QuestionDetails from '@/components/CreateQuiz/QuestionDetails.vue'
import Question from '@/components/CreateQuiz/Question.vue'
import '../../assets/css/CreateQuiz/createQuiz.css'
import { ref } from 'vue'
import { useQuizStore } from '@/stores/QuizStore.js'
import { useQuestionStore } from '@/stores/QuestionStore.js'
import {
  getActiveQuestion,
  storeUpdateAnswers, storeUpdateDifficulty,
  storeUpdateQuestionText,
  storeUpdateQuestionTitle, storeUpdateTimeLimit,
  storeUpdateExplanation
} from '@/services/CreateQuizService.js'
import CreateMultipleChoice from '@/components/CreateQuiz/CreateMultipleChoice.vue'
import { getCategoryImage } from '@/services/DiscoverService.js'

// Retrieve the active quiz and current question
const quiz = ref(useQuizStore().getActiveQuiz)

// Initializing reactive values for the active quiz and question
const questionText = ref('');
const questionImage = ref(getCategoryImage(useQuizStore().getActiveQuiz.categoryId));
const answer1 = ref('');
const answer2 = ref('');
const answer3 = ref('');
const answer4 = ref('');
const answer1Checked = ref(false);
const answer2Checked = ref(false);
const answer3Checked = ref(false);
const answer4Checked = ref(false);
const questionTitle = ref('')
const questionType = ref('Multiple Choice')
const timeLimit = ref(60)
const questionTag = ref('')
const difficulty = ref('Easy')
const explanation = ref('')
const listOfAnswers = [answer1, answer2, answer3, answer4]
const listOfCheckedAnswers = [answer1Checked, answer2Checked, answer3Checked, answer4Checked]

/**
 * Updates reactive values when the next question is being toggled.
 */
const updateReactiveValues = () => {
  if (quiz.value.questions.length > 0) {
    const activeQuestion = getActiveQuestion();
    questionText.value = activeQuestion.questionText;
    questionImage.value = ref(getCategoryImage(useQuizStore().getActiveQuiz.categoryId));

    // Initialize unreached answers as default answers
    for (let i = 0; i < 4; i++) {
      listOfAnswers[i].value = ''
      listOfCheckedAnswers[i].value = false
    }
    // Update answers and their checked status
    for (let i = 0; i < activeQuestion.answers.length; i++) {
      listOfAnswers[i].value = activeQuestion.answers[i].answerText;
      listOfCheckedAnswers[i].value = activeQuestion.answers[i].isCorrect;
    }
    // Update question title
    questionTitle.value = activeQuestion.questionName;
    // Determine question type
    if (activeQuestion.typeId === 1) {
      questionType.value = 'Multiple Choice';
    }
    // Determine time limit
    if (!activeQuestion.question_duration) {
      timeLimit.value = 60;
    } else {
      timeLimit.value = activeQuestion.question_duration
    }
    // Reset question tag
    questionTag.value = null;
    // Determine question difficulty
    if (activeQuestion.difficultyId === 1) {
      difficulty.value = 'Easy';
    } else if (activeQuestion.difficultyId === 2) {
      difficulty.value = "Medium";
    } else if (activeQuestion.difficultyId === 3) {
      difficulty.value = 'Hard';
    }
    // Update explanation
    explanation.value = activeQuestion.explanations;
  }
}

if (quiz.value.questions && quiz.value.questions.length > 0) {
  useQuestionStore().setActiveQuestionId(quiz.value.questions[0].questionId)
  updateReactiveValues()
}

/**
 * Updates the question text value and stores it.
 * @param {string} newValue - The new value for the question text.
 */
const updateQuestionText = (newValue) => {
  questionText.value = newValue
  storeUpdateQuestionText(newValue)
}

/**
 * Updates the question image value.
 * @param {string} newValue - The new value for the question image.
 */
const updateQuestionImage = (newValue) => {
  questionImage.value = newValue
}

/**
 * Updates the first answer value and stores it.
 * @param {string} newValue - The new value for the first answer.
 */
const updateAnswer1 = (newValue) => {
  answer1.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}

/**
 * Updates the second answer value and stores it.
 * @param {string} newValue - The new value for the second answer.
 */
const updateAnswer2 = (newValue) => {
  answer2.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}

/**
 * Updates the third answer value and stores it.
 * @param {string} newValue - The new value for the third answer.
 */
const updateAnswer3 = (newValue) => {
  answer3.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}

/**
 * Updates the fourth answer value and stores it.
 * @param {string} newValue - The new value for the fourth answer.
 */
const updateAnswer4 = (newValue) => {
  answer4.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}

/**
 * Updates the checked status of the first answer and stores it.
 * @param {boolean} newValue - The new checked status for the first answer.
 */
const updateAnswer1Checked = (newValue) => {
  answer1Checked.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}

/**
 * Updates the checked status of the second answer and stores it.
 * @param {boolean} newValue - The new checked status for the second answer.
 */
const updateAnswer2Checked = (newValue) => {
  answer2Checked.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}

/**
 * Updates the checked status of the third answer and stores it.
 * @param {boolean} newValue - The new checked status for the third answer.
 */
const updateAnswer3Checked = (newValue) => {
  answer3Checked.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}

/**
 * Updates the checked status of the fourth answer and stores it.
 * @param {boolean} newValue - The new checked status for the fourth answer.
 */
const updateAnswer4Checked = (newValue) => {
  answer4Checked.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}

/**
 * Updates the question title value and stores it.
 * @param {string} newValue - The new value for the question title.
 */
const updateQuestionTitle = (newValue) => {
  questionTitle.value = newValue
  storeUpdateQuestionTitle(newValue)
}

/**
 * Updates the question type value.
 * @param {string} newValue - The new value for the question type.
 */
const updateQuestionType = (newValue) => {
  questionType.value = newValue
}

/**
 * Updates the time limit value and stores it.
 * @param {number} newValue - The new value for the time limit.
 */
const updateTimeLimit = (newValue) => {
  timeLimit.value = newValue
  storeUpdateTimeLimit(newValue)
}

/**
 * Updates the question tag value.
 * @param {string} newValue - The new value for the question tag.
 */
const updateQuestionTag = (newValue) => {
  questionTag.value = newValue
}

/**
 * Updates the difficulty value and stores it.
 * @param {string} newValue - The new value for the question difficulty.
 */
const updateDifficulty = (newValue) => {
  difficulty.value = newValue
  storeUpdateDifficulty(newValue)
}

/**
 * Updates the explanation value and stores it.
 * @param {string} newValue - The new value for the question explanation.
 */
const updateExplanation = (newValue) => {
  explanation.value = newValue
  storeUpdateExplanation(newValue)
}

/**
 * Retrieves the next question and updates reactive values accordingly.
 */
const nextQuestion = () => {
  updateReactiveValues(getActiveQuestion())
}

</script>

<template>
  <div class="create-quiz-container">
    <VerticalQuestionBar v-model:question-array="quiz.questions"
                         @toggleNextQuizEvent="nextQuestion"/>
    <div>
      <h1>{{quiz.title}}</h1>
      <Question v-model:question-text="questionText"
                :question-image="questionImage.value"
                @questionTextEvent="updateQuestionText"
                @questionImageEvent="updateQuestionImage"
      />
      <CreateMultipleChoice v-model:answer1="answer1"
                  v-model:answer2="answer2"
                  v-model:answer3="answer3"
                  v-model:answer4="answer4"
                  v-model:answer1Checked="answer1Checked"
                  v-model:answer2Checked="answer2Checked"
                  v-model:answer3Checked="answer3Checked"
                  v-model:answer4Checked="answer4Checked"
                  @answer1Event="updateAnswer1"
                  @answer2Event="updateAnswer2"
                  @answer3Event="updateAnswer3"
                  @answer4Event="updateAnswer4"
                  @answer1CheckedEvent="updateAnswer1Checked"
                  @answer2CheckedEvent="updateAnswer2Checked"
                  @answer3CheckedEvent="updateAnswer3Checked"
                  @answer4CheckedEvent="updateAnswer4Checked"/>
    </div>
    <QuestionDetails v-model:question-title="questionTitle"
                     v-model:question-type="questionType"
                     v-model:time-limit="timeLimit"
                     v-model:question-tag="questionTag"
                     v-model:difficulty="difficulty"
                     v-model:explanation="explanation"
                     @questionTitleEvent="updateQuestionTitle"
                     @questionTypeEvent="updateQuestionType"
                     @timeLimitEvent="updateTimeLimit"
                     @questionTagEvent="updateQuestionTag"
                     @difficultyEvent="updateDifficulty"
                     @explanationEvent="updateExplanation"
    />
  </div>
</template>