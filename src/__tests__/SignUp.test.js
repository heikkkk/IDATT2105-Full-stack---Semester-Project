import { mount } from '@vue/test-utils';
import { describe, expect, test} from 'vitest'
import SignUp from '@/components/SignUp/SignUp.vue'
import TextInput from '@/components/SignUp/TextInput.vue'

describe('Signup', () => {


  test('renders the signup form correctly', () => {
    const wrapper = mount(SignUp);

    const usernameInput = wrapper.findComponent(TextInput)
    const emailInput = wrapper.findAllComponents(TextInput)[1]
    const passwordInput = wrapper.findAllComponents(TextInput)[2]
    expect(wrapper.find('form').exists()).toBe(true);
    expect(usernameInput.props('label')).toBe('Username');
    expect(emailInput.props('label')).toBe('Email');
    expect(passwordInput.props('label')).toBe('Password');
  });

  test('does not allow signing up with an invalid email', async () => {
    const wrapper = mount(SignUp);

    const emailInput = wrapper.findAllComponents(TextInput)[1];
    const submitButton = wrapper.find('button[type="submit"]');

    // Set an invalid email

    // Submit the form
    await submitButton.trigger('click');
     console.log(submitButton.text())
    console.log("email error: ", emailInput.props().error);

    // Assert that the error message is displayed
    const errorMessage = wrapper.find('.errorMessage');
    expect(errorMessage.exists()).toBe(true);
     //expect(wrapper.find('.errorMessage').text()).toEqual('Invalid email'
    //   + ' address');
    expect(wrapper.emitted().signup).toBeFalsy();
  });

});
