import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import QuizResults from '@/components/PlayQuiz/QuizResults.vue'

describe('QuizResults', () => {

  test('should render default correctly', async () => {
    const wrapper = mount(QuizResults)

    const resultText = wrapper.find('h1').text()
    expect(resultText).toEqual('You got 0 out of 1 right!')
  })
})