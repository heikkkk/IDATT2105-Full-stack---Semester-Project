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
import QuizSummary from '@/components/CreateQuiz/QuizSummary.vue'
import CreateMultipleChoice from '@/components/CreateQuiz/CreateMultipleChoice.vue'
import { useUserStore } from '@/stores/UserStore.js'

// Retrieve the active quiz and current question
const quiz = ref(useQuizStore().getActiveQuiz)

const questionText = ref('');
const questionImage = ref('');
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

const updateReactiveValues = () => {
  if (quiz.value.questions.length > 0) {
    const activeQuestion = getActiveQuestion();
    console.log(activeQuestion)
    questionText.value = activeQuestion.questionText;
    questionImage.value = 'src/assets/img/questionMark.png';
    // Initialize unreached answers as default
    for (let i = 0; i < 4; i++) {
      listOfAnswers[i].value = ''
      listOfCheckedAnswers[i].value = false
    }
    for (let i = 0; i < activeQuestion.answers.length; i++) {
      listOfAnswers[i].value = activeQuestion.answers[i].answerText;
      listOfCheckedAnswers[i].value = activeQuestion.answers[i].isCorrect;
    }
    questionTitle.value = activeQuestion.questionName;
    if (activeQuestion.typeId === 1) {
      questionType.value = 'Multiple Choice';
    } else if (activeQuestion.typeId === 2) {
      questionType.value = 'True False';
    }
    if (!activeQuestion.question_duration) {
      timeLimit.value = 60;
    } else {
      timeLimit.value = activeQuestion.question_duration
    }
    questionTag.value = null;
    if (activeQuestion.difficultyId === 1) {
      difficulty.value = 'Easy';
    } else if (activeQuestion.difficultyId === 2) {
      difficulty.value = "Medium";
    } else if (activeQuestion.difficultyId === 3) {
      difficulty.value = 'Hard';
    }
    explanation.value = activeQuestion.explanations;
    console.log(explanation.value)
  }
}

if (quiz.value.questions.length > 0) {
  useQuestionStore().setActiveQuestionId(quiz.value.questions[0].questionId)
  updateReactiveValues()
}

const updateQuestionText = (newValue) => {
  questionText.value = newValue
  storeUpdateQuestionText(newValue)
}
const updateQuestionImage = (newValue) => {
  questionImage.value = newValue
}
const updateAnswer1 = (newValue) => {
  answer1.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}
const updateAnswer2 = (newValue) => {
  answer2.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}
const updateAnswer3 = (newValue) => {
  answer3.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}
const updateAnswer4 = (newValue) => {
  answer4.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}
const updateAnswer1Checked = (newValue) => {
  answer1Checked.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}
const updateAnswer2Checked = (newValue) => {
  answer2Checked.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}
const updateAnswer3Checked = (newValue) => {
  answer3Checked.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}
const updateAnswer4Checked = (newValue) => {
  answer4Checked.value = newValue
  storeUpdateAnswers(listOfAnswers, listOfCheckedAnswers)
}
const updateQuestionTitle = (newValue) => {
  questionTitle.value = newValue
  storeUpdateQuestionTitle(newValue)
}
const updateQuestionType = (newValue) => {
  questionType.value = newValue
}
const updateTimeLimit = (newValue) => {
  timeLimit.value = newValue
  storeUpdateTimeLimit(newValue)
}
const updateQuestionTag = (newValue) => {
  questionTag.value = newValue
}
const updateDifficulty = (newValue) => {
  difficulty.value = newValue
  storeUpdateDifficulty(newValue)
}
const updateExplanation = (newValue) => {
  explanation.value = newValue
  storeUpdateExplanation(newValue)
}
const nextQuestion = () => {
  updateReactiveValues(getActiveQuestion())
}

const test = () => {
  //console.log(JSON.stringify(useQuizStore().getActiveQuiz))
  console.log(useQuizStore().getActiveQuiz)
  console.log('userId: ', useUserStore().getUserId)
}
</script>

<template>
  <div class="create-quiz-container" @click="test">
    <VerticalQuestionBar @click="test" v-model:question-array="quiz.questions" @toggleNextQuizEvent="nextQuestion"/>
    <div>
      <h1>{{quiz.title}}</h1>
      <Question v-model:question-text="questionText"
                v-model:question-image="questionImage"
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