import { ActionContext, createStore } from "vuex";
import { ChatResponse, Headers, Message, Promt, State } from "../models/models";
import { wait, scrollByMessageContent } from '../utils/utils'
import { SSE } from 'sse'
import { COMPLETIONS_URL } from '../config/constants'

const store = createStore({
  state: {
    messages: []
  } as State,
  mutations: {
    setMessages(state: State, payload: Message): void {
      state.messages = [...state.messages, payload] as Message[]
    }
  },
  actions: {
    async sendMessageToAI(ctx: ActionContext<State, State>, text: string): Promise<void> {
      try {
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
        await wait(500)
        scrollByMessageContent()
        const source: SSE = new SSE(COMPLETIONS_URL, {
          headers,
          method: "POST",
          payload: JSON.stringify(promt),
        });
        const id = Math.floor(Math.random() * 99999999)
        ctx.commit('setMessages', {id, role: 'assistant', content: ''})
        scrollByMessageContent()
        source.addEventListener('message', (e) => {
          if (e.data !== "[DONE]") {
            const payload: ChatResponse = JSON.parse(e.data);
            payload.choices.forEach(c => {
              const idx = ctx.state.messages.findIndex(i => i.id === id)
              if(c.delta.content) {
                ctx.state.messages[idx].content += c.delta.content
                scrollByMessageContent()
              }
            })
          } else {
            source.close();
          }
        })
      } catch (error) {
        throw new Error('Ошибка ' + error)
      }
    }
  },
  getters: {
    messages: (state: State) => state.messages
  },
});

export default store;
