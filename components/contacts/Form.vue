<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  formData: Object,
});

const form = ref({
  name: '',
  number: '',
  email: '',
  message: '',
});

const isSubmitting = ref(false);
const successMessage = ref('');

const handleSubmit = async () => {
  isSubmitting.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    successMessage.value = props.formData.message;
  } catch (error) {
    console.error('Form submission failed', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <form v-if="!successMessage" class="form" @submit.prevent="handleSubmit">
    <input
      type="text"
      v-model="form.name"
      name="name"
      :placeholder="formData.name"
      required
    />

    <input
      type="text"
      v-model="form.number"
      name="number"
      :placeholder="formData.number"
      required
    />

    <input
      type="email"
      v-model="form.email"
      name="email"
      :placeholder="formData.email"
      required
    />

    <textarea
      v-model="form.message"
      name="message"
      :placeholder="formData.comment"
    ></textarea>

    <button class="btn-orange" :disabled="isSubmitting">
      {{ isSubmitting ? '...' : formData.btnText }}
    </button>
  </form>
  <p v-if="successMessage">{{ successMessage }}</p>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  input,
  textarea {
    backdrop-filter: blur(72.72222137451172px);
    box-shadow: inset 0 2px 2px 0 rgba(255, 255, 255, 0.15),
      inset 0 0 34px 0 rgba(255, 255, 255, 0.05);
    background: rgba(255, 255, 255, 0.03);
    border-radius: 36px;
    outline: none;
    padding:  clamp(16px,2vw,25px) clamp(20px,2.5vw,30px);
    border: none;
    font-family: $f-family-2;
    font-size: clamp(14px, px_to_vw(18), 18px);
    color: $c-white;
    margin-bottom: $space-20;
  }
  textarea {
    height: 194px;
    resize: none;
    margin-bottom: $space-40;
  }
  button {
    background: $c-orange-gradient;
    border-radius: 36px;
    padding: 16px 33px;
    font-family: $f-family-2;
    font-size: 16px;
    text-align: center;
    color: $c-white;
    width: fit-content;
    transition: 0.3s ease;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
      color: $c-white;
    }
  }
}

</style>
