<template>
  <div class="app-messages" id="app-messages">
    <div v-for="item in messages" :key="item.id" class="app-messages__item" id="app-messages__item">
      <div class="app-messages__type">
        <p class="app-messages__paragraph">{{ item.role === 'user' ? 'USER' : 'AI' }}</p>
      </div>
      <pre class="app-messages__text">
        {{ replace(item.content) }}
      </pre>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex'
import { Message } from '../models/models';
const store = useStore()

const messages = computed<Message[]>(() => store.state.messages)

const replace = (content: string) => {
  return content.replaceAll('<|im_end|>', ' ').replaceAll('<|im_start|>', ' ').replaceAll('<|eot_id|>', ' ')
}
</script>
<style scoped lang="scss">
.app-messages {
  display: flex;
  flex-direction: column;
  width: calc(80vw);
  height: calc(100vh - 82px);
  overflow-x: hidden;
  scrollbar-width: none;

  .app-messages__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: min-content;
    hyphens: auto;
    width: 100%;
    padding: 20px;

    .app-messages__text {
      display: inline-block;
      color: white;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      text-align: center;
      margin: 0;
      word-break: normal;
      padding-left: 16px;
      overflow-x: auto;
      white-space: pre-wrap;
      text-align: left;
      text-indent: each-line;
    }

    .app-messages__type {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgb(179, 179, 179);
      width: 60px;
      height: 60px;
      border-radius: 10px;
      padding: 30px;

      .app-messages__paragraph {
        color: white;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
