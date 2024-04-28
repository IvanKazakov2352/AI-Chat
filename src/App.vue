<template>
  <div class="app-chat">
    <Messages v-if="messages.length" />
    <Welcome v-else />
    <Input class="position" />
  </div>
</template>
<script setup lang="ts">
import Input from './components/input.vue'
import Messages from './components/messages.vue'
import Welcome from './components/welcome.vue'
import { computed } from 'vue';
import { useStore } from 'vuex'
import { Message } from './models/models';
const store = useStore()

const messages = computed<Message[]>(() => store.state.messages)
</script>
<style scoped lang="scss">
.app-chat {
  width: 100%;
  height: calc(100vh);
  background-color: black;
  position: relative;
  display: flex;
  justify-content: center;

  .position {
    position: absolute;
    bottom: 0;
    margin: 10px;
  }
}
</style>
