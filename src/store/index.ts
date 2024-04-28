import { ActionContext, createStore } from "vuex";
import { ChatResponse, Headers, Message, Promt, State } from "../models/models";
import { wait, scrollToLastMessage } from '../utils/utils'
import { SSE } from 'sse'

const store = createStore({
  state: {
    messages: []
  } as State,
  mutations: {
    setMessages(state: State, payload: Message): void {
      state.messages = [...state.messages, payload]
    }
  },
  actions: {
    async sendMessageToAI(ctx: ActionContext<State, State>, text: string) {
      const headers: Headers = {
        'Content-Type': 'application/json',
      }
      const promt: Promt = {
        messages: [
          ...ctx.state.messages,
          {id: Math.floor(Math.random() * 99999999), role: 'user', content: text}
        ],
        temperature: 0.7,
        max_tokens: -1,
        stream: true
      }
      ctx.commit('setMessages', {role: 'user', content: text})
      await wait(300)
      scrollToLastMessage()
      await wait(500)
      const source = new SSE('http://localhost:1234/v1/chat/completions', {
        headers,
        method: "POST",
        payload: JSON.stringify(promt),
      });
      const id = Math.floor(Math.random() * 99999999)
      ctx.commit('setMessages', {id, role: 'assistant', content: ''})
      await wait(300)
      scrollToLastMessage()
      await wait(500)
      source.addEventListener('message', (e) => {
        if (e.data !== "[DONE]") {
          const payload: ChatResponse = JSON.parse(e.data);
          payload.choices.forEach(c => {
            const idx = ctx.state.messages.findIndex(i => i.id === id)
            if(c.delta.content) {
              ctx.state.messages[idx].content += c.delta.content
              scrollToLastMessage()
            }
          })
        } else {
          source.close();
        }
      })
    }
  },
  getters: {
    messages: (state: State) => state.messages
  },
});

export default store;
