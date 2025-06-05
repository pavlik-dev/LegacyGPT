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
  "qwen-coder",
  "llama",
  "llamascout",
  "mistral",
  "unity",
  "mirexa",
  "searchgpt",
  "deepseek-reasoning",
  "phi",
  "hormoz",
  "deepseek",
  "grok",
  "bidara",
  'gemini-2.0-flash-lite-free',
  'gemini-1.5-flash-8b-free',
  'gemini-1.5-flash-free',
  'gemini-1.5-pro-free',
];

export const modelNames: Record<ModelOptions, string> = {
  "openai": "GPT-4.1-mini",
  "openai-fast": "GPT-4.1-nano",
  "openai-large": "GPT-4.1",
  "openai-roblox": "GPT-4.1-mini (Roblox)",
  "qwen-coder": "Qwen 2.5 Coder 32B",
  "llama": "Llama 3.3 70B",
  "llamascout": "Llama 4 Scout 17B",
  "mistral": "Mistral Small 3.1 24B",
  "unity": "Unity",
  "mirexa": "Mirexa",
  "searchgpt": "SearchGPT",
  "deepseek-reasoning": "DeepSeek R1",
  "phi": "Phi-4 Instruct",
  "hormoz": "Hormoz 8b",
  "deepseek": "DeepSeek-V3",
  "grok": "Grok-3 Mini",
  "bidara": "BIDARA",
  'gemini-2.0-flash-lite-free': "Gemini 2.0 Flash Lite (free)",
  'gemini-1.5-flash-8b-free': "Gemini 1.5 Flash 8B (free)",
  'gemini-1.5-flash-free': "Gemini 1.5 Flash (free)",
  'gemini-1.5-pro-free': "Gemini 1.5 Pro (free)",
}

export const defaultModel = 'openai';

export const modelMaxToken: Record<ModelOptions, number> = {
  'openai': 1047576,
  'openai-fast': 1047576,
  'openai-large': 1047576,
  "openai-roblox": 1047576,
  "qwen-coder": 32768,
  'llama': 24000,
  'llamascout': 131000,
  'mistral': 128000,
  'unity': 128000,
  'mirexa': 1047576,
  'searchgpt': 128000,
  'deepseek-reasoning': 128000,
  'phi': 16000,
  'hormoz': 128000,
  'deepseek': 128000,
  'grok': 131072,
  'bidara': 8192,

  'gemini-2.0-flash-lite-free': 1048576,
  'gemini-1.5-flash-8b-free': 1000000,
  'gemini-1.5-flash-free': 1000000,
  'gemini-1.5-pro-free': 2000000,
};

export const modelProviders: Record<ModelOptions, ModelProviders> = {
  'openai': 'pollinations.ai',
  'openai-fast': 'pollinations.ai',
  'openai-large': 'pollinations.ai',
  "openai-roblox": 'pollinations.ai',
  "qwen-coder": 'pollinations.ai',
  'llama': 'pollinations.ai',
  'llamascout': 'pollinations.ai',
  'mistral': 'pollinations.ai',
  'unity': 'pollinations.ai',
  'mirexa': 'pollinations.ai',
  'searchgpt': 'pollinations.ai',
  'deepseek-reasoning': 'pollinations.ai',
  'phi': 'pollinations.ai',
  'hormoz': 'pollinations.ai',
  'deepseek': 'pollinations.ai',
  'grok': 'pollinations.ai',
  'bidara': 'pollinations.ai',

  'gemini-2.0-flash-lite-free': 'pavlik_tt',
  'gemini-1.5-flash-8b-free': 'pavlik_tt',
  'gemini-1.5-flash-free': 'pavlik_tt',
  'gemini-1.5-pro-free': 'pavlik_tt',
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
