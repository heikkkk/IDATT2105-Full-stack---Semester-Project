import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import TextInput from '@/components/SignUp/TextInput.vue'

describe('SignUp', () => {

  test('error message is displayed', () => {
    const wrapper = mount(TextInput, {
      props: {
        error: 'testError'
      }
    })
    expect(wrapper.find("p").text()).toEqual('testError')
  })
})