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
    //TODO lag flere expect setninger som sjekker om alle props blir brukt
    expect(answerText).toEqual('testAnswer')
  })
})