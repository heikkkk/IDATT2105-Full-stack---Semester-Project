import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import AnswerButton from '@/components/PlayQuiz/AnswerButton.vue'

describe('AnswerButton.vue', () => {
  test('should render correctly', () => {
    const wrapper = mount(AnswerButton, {
      propsData: {
        answer: 'testAnswer',
        isCorrect: false,
        color: 'red'
      }
    })

    const answerText = wrapper.find('.answer-button-label').text()
    const answerButton = wrapper.find('.answer-button-container')
    const backgroundColorButton = window.getComputedStyle(answerButton.element).backgroundColor
    expect(backgroundColorButton).toEqual('rgb(255, 0, 0)')
    expect(answerText).toEqual('testAnswer')
  })
})