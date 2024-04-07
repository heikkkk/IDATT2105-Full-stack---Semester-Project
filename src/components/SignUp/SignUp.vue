<script setup>
import '../../assets/css/SignUp/signUp.css'
import LogoTitle from '@/components/LogoTitle.vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import { signUp } from '@/services/SignUpService.js'
import TextInput from '@/components/SignUp/TextInput.vue'

const registrationError = ref(false)
const router = useRouter()

/**
 * Validates whether a value is provided for a required field.
 * @param {string|number|null|undefined} value - The value to be validated.
 * @returns {(string|boolean)} Returns a string with the error message if the value is empty or true if it's valid.
 */
const required = value => {
  const requiredMessage = 'This field is required'
  if (value === undefined || value === null) return requiredMessage
  if (!String(value).length) return requiredMessage
  return true
}

/**
 * Validates the syntax of an email address.
 * @param {string} value - The email address to be validated.
 * @returns {(string|boolean)} Returns a string with the error message if the email address is invalid or true if it's valid.
 */
const emailSyntax = value => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(String(value).toLowerCase())) {
      return 'Invalid email address'
    }
  return true
}

/**
 * Defines the validation schema for the entire form.
 */
const validationSchema = {
      username: required,
      password: required,
      email: value => {
        const req = required(value)
        if (req !== true) return req

        const emailCheck = emailSyntax(value)
        if (emailCheck !== true) return emailCheck

        return true
      },
    }

const { handleSubmit, errors } = useForm({
  validationSchema
})

const { value: username } = useField('username')
const { value: email } = useField('email')
const { value: password } = useField('password')

/**
 * Handles form submission using VeeValidate.
 * Upon successful sign-up, redirects the user to the discover page.
 * If sign-up fails, displays a registration error message.
 * @param values - the sign-up values from the user.
 */
const submit = handleSubmit(async values => {
  try {
  const response = await signUp(values)

  if (response && response.status === 200) {
      await router.push('/discover')
    } else {
      registrationError.value = true
    }
  } catch(error) {
    console.log("an error has occured")
    registrationError.value = true
  }
})
</script>

<template>
  <div class="signup-wrapper">
    <div class="signup-container">
      <form class="signup-form" @submit="submit">
        <LogoTitle color="#ffffff"></LogoTitle>
        <p v-if="registrationError" class="error_msg">Sorry, we could not register you at this time.<br> Please try again later</p>
        <TextInput
          label="Username"
          type="text"
          :error="errors.username"
          v-model="username"
          class="username-input">
        </TextInput>

        <TextInput
          label="Email"
          type="email"
          :error="errors.email"
          v-model="email"
          class="email-input">
        </TextInput>

        <TextInput
          label="Password"
          type="password"
          :error="errors.password"
          v-model="password"
          class="password-input">
        </TextInput>


        <div class="signup-button-container">
          <button data-cy="sign-up-button" class="signup-button" type="submit">Sign up</button>
          <div class="login-paragraph-container">
            <p>Already created an account?
              <RouterLink to="/login" style="color: white">Login</RouterLink>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>