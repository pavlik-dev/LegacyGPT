import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions, ModelProviders } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `You are ChatGPT, a large language model trained by OpenAI.
Carefully heed the user's instructions. 
Respond using Markdown.`;

export const modelOptions: ModelOptions[] = [
  "gpt-5-nano",
  "gpt-4.1-nano",
  "gpt-4.1",
  "searchgpt"
];

export const modelNames: Record<ModelOptions, string> = {
  "gpt-5-nano": "GPT-5 nano",
  "gpt-4.1-nano": "GPT-4.1 nano",
  "gpt-4.1": "GPT-4.1",
  "searchgpt": "SearchGPT"
}

export const defaultModel = 'gpt-5-nano';

export const modelMaxToken: Record<ModelOptions, number> = {
  'gpt-5-nano': 400000,
  'gpt-4.1-nano': 1047576,
  'gpt-4.1': 1047576,
  'searchgpt': 128000
};

export const modelProviders: Record<ModelOptions, ModelProviders> = {
  'gpt-5-nano': 'pollinations.ai',
  'gpt-4.1-nano': 'pollinations.ai',
  'gpt-4.1': 'pollinations.ai',
  'searchgpt': 'pollinations.ai',
}

export const defaultUserMaxToken = 4000;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
