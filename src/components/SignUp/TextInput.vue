<script setup>
import UniqueID from '../SignUp/UniqueID.js'
import '../../assets/css/Login/login.css'

// Generates a unique identifier
const uuid = UniqueID().getID()

const props = defineProps({
    label: [String, Number],
    error: String,
    hasError: Boolean
})

const model = defineModel()
</script>

<template>
    <div class="container" :class="{ 'error': hasError }">
        <label 
            v-if="label"
            :for="uuid"
        >
            {{ label }}
        </label>
        <input
            v-bind="$attrs"
            v-model="model"
            :placeholder="label"
            :id="uuid"
            :aria-describedby="error ? `${uuid}-error` : null"
            :aria-invalid="error ? true : null"
        >
    </div>
    <p
        v-if="error"
        class="errorMessage"
        :id="`${uuid}-error`"
        aria-live="assertive"   
    >
        {{ error }}    
    </p>
</template>

<style scoped>
label {
    color: white;
    font-family: "Semi Bold Italic", sans-serif;
}

.container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

.container.error input{
    border: 2px solid red;
}

.field {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
    height: 100%;
}

.errorMessage {
  margin-top: 0;
  margin-left: 10px;
  color: red;
}
</style>
