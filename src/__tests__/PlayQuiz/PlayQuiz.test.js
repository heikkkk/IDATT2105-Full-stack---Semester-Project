import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import PlayQuiz from '@/components/PlayQuiz/PlayQuiz.vue'
import QuestionDisplay from '@/components/PlayQuiz/QuestionDisplay.vue'

describe('PlayQuiz', () => {
  test('should have QuestionDisplay', () => {
    const wrapper = mount(PlayQuiz)
    expect(wrapper.findComponent(QuestionDisplay).exists()).toBe(true)
  })
})