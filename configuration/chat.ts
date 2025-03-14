import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello! This is ${AI_NAME}, working alongside ${OWNER_NAME} to support you in your health journey. How can I support you today?`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please rephrase or reach out to Manisha.`;
export const WORD_CUTOFF: number = 10000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Give me a quick breather! I'll be back in a few minutes. In the meanwhile, take some deep breaths :) If you have any urgent questions, please reach out directly to Manisha.`;
export const HISTORY_CONTEXT_LENGTH: number = 10; // Number of messages to use for context when generating a response
