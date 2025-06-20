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
  "openai",
  "openai-fast",
  "openai-large",
  "openai-roblox",
  "searchgpt",
  'gemini-2.0-flash-lite-free',
  'gemini-1.5-flash-8b-free',
  'gemini-1.5-flash-free',
  'gemini-1.5-pro-free',
  'gemma-3-1b-it-free',
  'gemma-3-4b-it-free',
  'gemma-3-12b-it-free',
  'gemma-3-27b-it-free',
  'gemma-3n-e4b-it-free',
];

export const modelNames: Record<ModelOptions, string> = {
  "openai": "GPT-4.1-mini",
  "openai-fast": "GPT-4.1-nano",
  "openai-large": "GPT-4.1",
  "openai-roblox": "GPT-4.1-mini (Roblox)",
  "searchgpt": "SearchGPT",
  'gemini-2.0-flash-lite-free': "Gemini 2.0 Flash Lite (free)",
  'gemini-1.5-flash-8b-free': "Gemini 1.5 Flash 8B (free)",
  'gemini-1.5-flash-free': "Gemini 1.5 Flash (free)",
  'gemini-1.5-pro-free': "Gemini 1.5 Pro (free)",
  'gemma-3-1b-it-free': "Gemma 3 1B (free)",
  'gemma-3-4b-it-free': "Gemma 3 4B (free)",
  'gemma-3-12b-it-free': "Gemma 3 12B (free)",
  'gemma-3-27b-it-free': "Gemma 3 27B (free)",
  'gemma-3n-e4b-it-free': "Gemma 3n E4B (free)"
}

export const defaultModel = 'openai';

export const modelMaxToken: Record<ModelOptions, number> = {
  'openai': 1047576,
  'openai-fast': 1047576,
  'openai-large': 1047576,
  "openai-roblox": 1047576,
  'searchgpt': 128000,

  'gemini-2.0-flash-lite-free': 1048576,
  'gemini-1.5-flash-8b-free': 1000000,
  'gemini-1.5-flash-free': 1000000,
  'gemini-1.5-pro-free': 2000000,
  'gemma-3-1b-it-free': 32768,
  'gemma-3-4b-it-free': 32768,
  'gemma-3-12b-it-free': 32768,
  'gemma-3-27b-it-free': 131072,
  'gemma-3n-e4b-it-free': 8192
};

export const modelProviders: Record<ModelOptions, ModelProviders> = {
  'openai': 'pollinations.ai',
  'openai-fast': 'pollinations.ai',
  'openai-large': 'pollinations.ai',
  "openai-roblox": 'pollinations.ai',
  'searchgpt': 'pollinations.ai',

  'gemini-2.0-flash-lite-free': 'pavlik_tt',
  'gemini-1.5-flash-8b-free': 'pavlik_tt',
  'gemini-1.5-flash-free': 'pavlik_tt',
  'gemini-1.5-pro-free': 'pavlik_tt',
  'gemma-3-1b-it-free': 'pavlik_tt',
  'gemma-3-4b-it-free': 'pavlik_tt',
  'gemma-3-12b-it-free': 'pavlik_tt',
  'gemma-3-27b-it-free': 'pavlik_tt',
  'gemma-3n-e4b-it-free': 'pavlik_tt',
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
