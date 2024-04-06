import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Login from '@/components/Login/Login.vue'

describe('Login', () => {

  test('should display error', async () => {
    const wrapper = mount(Login)
    
    wrapper.vm.authenticationError = false;
    await wrapper.vm.$nextTick();

    const usernameInput = wrapper.find('input[type="text"]');
    expect(usernameInput.classes()).toContain('username-input');
  })

  test('should not display error', async () => {
    const wrapper = mount(Login)

    wrapper.vm.authenticationError = true;
    await wrapper.vm.$nextTick();

    const usernameInput = wrapper.find('input[type="text"]');
    expect(usernameInput.classes()).toContain('error');
  })
})