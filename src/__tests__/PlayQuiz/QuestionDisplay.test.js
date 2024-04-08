import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import QuestionDisplay from '@/components/PlayQuiz/QuestionDisplay.vue'
import AnswerButton from '@/components/PlayQuiz/AnswerButton.vue'
import CountdownTimer from '@/components/PlayQuiz/CountdownTimer.vue'

describe('QuestionDisplay', () => {

  test('should render correctly', () => {
    const wrapper = mount(QuestionDisplay, {
      props: {
        quizTitle: 'Question-title',
        questionText: 'Question-text',
        timerSeconds: 50,
        answers: [{
          "answerId": 1,
          "answerText": "Answer",
          "isCorrect": true
        },]
      }
    })
    const questionTextH1 = wrapper.find('h1').text()
    const answerButton = wrapper.findComponent(AnswerButton)
    const countDownTimer = wrapper.findComponent(CountdownTimer)

    expect(questionTextH1).toEqual('Question-text')
    expect(countDownTimer.props().timerValue).toEqual(50)
    expect(answerButton.props().answer).toBe('Answer')
  })

})