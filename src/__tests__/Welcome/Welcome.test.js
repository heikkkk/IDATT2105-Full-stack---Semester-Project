import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Welcome from '@/components/Welcome/Welcome.vue'

describe('Welcome', () => {

  test('should display comment-title', () => {
    const wrapper = mount(Welcome)

    const welcomeMessage = wrapper.find('h1')
    expect(welcomeMessage.exists()).toBe(true)
  })
})