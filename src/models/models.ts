export interface ChatResponse {
  created: number;
  id: string;
  model: string;
  object: string;
  choices: Array<Choise>;
}

export interface Choise {
  finish_reason: string;
  index: number;
  delta: {role: string, content: string}
}

export interface Message {
  id: number;
  content: string;
  role: string;
}

export interface State {
  messages: Array<Message>;
}

export interface Promt {
  messages: Array<Message>;
  temperature: number;
  max_tokens: number;
  stream: boolean;
}

export interface Headers {
  [key: string]: string;
}
