import axios from 'axios'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/UserStore.js'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState);
const app = createApp(App)
app.use(pinia)

const username = ref('')
const password = ref('')

const authConfig = computed(() => ({
  auth: {
    username: username.value,
    password: password.value
  }
}))

function parseResponse(response) {
  const userStore = useUserStore()
  userStore.setUsername(response.data.user_name)
  userStore.setToken(response.data.access_token)
  return response; // Return the response
}

export async function postLoginCredentials() {
  try {
    const response = await axios.post('http://localhost:8080/sign-in', {}, authConfig.value);
    return parseResponse(response);
  } catch (error) {
    throw error; // Throw error to propagate it to the caller
  }
}

export async function login() {
  return await postLoginCredentials();
}

export { username, password }
