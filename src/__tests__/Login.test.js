import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Login from '@/components/Login/Login.vue'

describe('Login', () => {
  const wrapper = mount(Login)

  test('should display error',async () => {
    await wrapper.setData({ authenticationError: true })
    expect(wrapper.find('.error-msg').exists().toBe(true))
  })
})