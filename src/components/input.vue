<template>
  <div class="app-input">
    <input
      v-model="text"
      class="app-input__textbox"
      type="text"
      @keyup.enter="sendMessageToAI()"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
const text = ref("");
const store = useStore()

const sendMessageToAI = async () => {
  await store.dispatch('sendMessageToAI', text.value)
  text.value = ""
};
</script>
<style scoped lang="scss">
.app-input {
  display: flex;
  align-items: center;
  width: calc(80vw);
  height: 50px;
  border-radius: 20px;
  border: 1px solid rgb(121, 94, 240);

  input[type="text"] {
    background-color: transparent;
    outline: none;
    border: 0;
    width: 100%;
    color: white;
    height: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
