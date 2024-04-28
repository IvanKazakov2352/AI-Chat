<template>
  <div class="welcome-block">
    <p class="title">AI Chat</p>
    <div class="description">
      Чат созданный для общения с ИИ. Позволяет узнать интересующие тебя
      вопросы! Чат абсолютно бесплатный!
    </div>
    <div class="description">
      Чат сохраняет контекст общения, только локально в рамках сессии страницы!
    </div>
    <div class="description">
      Если чат начал некорректно писать ответы, то скажи ему сборосить контекст общения и обновите страницу!
    </div>
    <div class="description">
      Автор чата:
      <p class="text-title">Иван Казаков</p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.welcome-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  height: 250px;
  background-color: rgb(155, 155, 155);
  margin-top: 300px;
  border-radius: 20px;
}

.title {
  margin-left: 15px;
  margin-right: 15px;
  font-weight: 600;
}

.description {
  display: flex;
  margin-left: 15px;
  margin-right: 15px;
}

.text-title {
  margin-left: 5px;
  margin-right: 5px;
  font-weight: 600;
}
</style>
