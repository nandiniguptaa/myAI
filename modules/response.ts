import {
  Chat,
  Chunk,
  Source,
  CoreMessage,
  AIProviders,
  ProviderName,
  Citation,
} from "@/types";
import {
  convertToCoreMessages,
  embedHypotheticalData,
  generateHypotheticalData,
  getSourcesFromChunks,
  searchForChunksUsingEmbedding,
  getContextFromSources,
  getCitationsFromChunks,
  buildPromptFromContext,
} from "@/utilities/chat";
import {
  queueAssistantResponse,
  queueError,
  queueIndicator,
} from "@/actions/streaming";
import {
  HISTORY_CONTEXT_LENGTH,
  DEFAULT_RESPONSE_MESSAGE,
} from "@/configuration/chat";
import { stripMessagesOfCitations } from "@/utilities/chat";
import {
  RESPOND_TO_HOSTILE_MESSAGE_SYSTEM_PROMPT,
  RESPOND_TO_QUESTION_BACKUP_SYSTEM_PROMPT,
  RESPOND_TO_QUESTION_SYSTEM_PROMPT,
  RESPOND_TO_RANDOM_MESSAGE_SYSTEM_PROMPT,
  RESPOND_TO_MEDICAL_MESSAGE_SYSTEM_PROMPT,
  RESPOND_TO_NUTRITION_MESSAGE_SYSTEM_PROMPT,
  RESPOND_TO_LABWORK_MESSAGE_SYSTEM_PROMPT,
  RESPOND_TO_EXERCISE_MESSAGE_SYSTEM_PROMPT,
} from "@/configuration/prompts";
import {
  MEDICAL_RESPONSE_PROVIDER,
  MEDICAL_RESPONSE_MODEL,
  RANDOM_RESPONSE_PROVIDER,
  RANDOM_RESPONSE_MODEL,
  HOSTILE_RESPONSE_PROVIDER,
  HOSTILE_RESPONSE_MODEL,
  QUESTION_RESPONSE_PROVIDER,
  QUESTION_RESPONSE_MODEL,
  HOSTILE_RESPONSE_TEMPERATURE,
  QUESTION_RESPONSE_TEMPERATURE,
  RANDOM_RESPONSE_TEMPERATURE,
  MEDICAL_RESPONSE_TEMPERATURE,
  NUTRITION_RESPONSE_PROVIDER,
  NUTRITION_RESPONSE_MODEL,
  NUTRITION_RESPONSE_TEMPERATURE,
  LABWORK_RESPONSE_PROVIDER,
  LABWORK_RESPONSE_MODEL,
  LABWORK_RESPONSE_TEMPERATURE,
  EXERCISE_RESPONSE_PROVIDER,
  EXERCISE_RESPONSE_MODEL,
  EXERCISE_RESPONSE_TEMPERATURE,
} from "@/configuration/models";

/**
 * ResponseModule is responsible for collecting data and building a response
 */
export class ResponseModule {
  static async respondToRandomMessage(
    chat: Chat,
    providers: AIProviders
  ): Promise<Response> {
    /**
     * Respond to the user when they send a RANDOM message
     */
    const PROVIDER_NAME: ProviderName = RANDOM_RESPONSE_PROVIDER;
    const MODEL_NAME: string = RANDOM_RESPONSE_MODEL;

    const stream = new ReadableStream({
      async start(controller) {
        queueIndicator({
          controller,
          status: "Coming up with an answer",
          icon: "thinking",
        });
        const systemPrompt = RESPOND_TO_RANDOM_MESSAGE_SYSTEM_PROMPT();
        const mostRecentMessages: CoreMessage[] = await convertToCoreMessages(
          stripMessagesOfCitations(chat.messages.slice(-HISTORY_CONTEXT_LENGTH))
        );

        const citations: Citation[] = [];
        queueAssistantResponse({
          controller,
          providers,
          providerName: PROVIDER_NAME,
          messages: mostRecentMessages,
          model_name: MODEL_NAME,
          systemPrompt,
          citations,
          error_message: DEFAULT_RESPONSE_MESSAGE,
          temperature: RANDOM_RESPONSE_TEMPERATURE,
        });
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  }

  static async respondToMedicalMessage(
    chat: Chat,
    providers: AIProviders
  ): Promise<Response> {
    /**
     * Respond to the user when they send a RANDOM message
     */
    const PROVIDER_NAME: ProviderName = MEDICAL_RESPONSE_PROVIDER;
    const MODEL_NAME: string = MEDICAL_RESPONSE_MODEL;

    const stream = new ReadableStream({
      async start(controller) {
        queueIndicator({
          controller,
          status: "Coming up with an answer",
          icon: "thinking",
        });
        const systemPrompt = RESPOND_TO_MEDICAL_MESSAGE_SYSTEM_PROMPT();
        const mostRecentMessages: CoreMessage[] = await convertToCoreMessages(
          stripMessagesOfCitations(chat.messages.slice(-HISTORY_CONTEXT_LENGTH))
        );

        const citations: Citation[] = [];
        queueAssistantResponse({
          controller,
          providers,
          providerName: PROVIDER_NAME,
          messages: mostRecentMessages,
          model_name: MODEL_NAME,
          systemPrompt,
          citations,
          error_message: DEFAULT_RESPONSE_MESSAGE,
          temperature: MEDICAL_RESPONSE_TEMPERATURE,
        });
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  }

  static async respondToNutritionMessage(
    chat: Chat,
    providers: AIProviders
  ): Promise<Response> {
    /**
     * Respond to the user when they send a RANDOM message
     */
    const PROVIDER_NAME: ProviderName = NUTRITION_RESPONSE_PROVIDER;
    const MODEL_NAME: string = NUTRITION_RESPONSE_MODEL;

    const stream = new ReadableStream({
      async start(controller) {
        queueIndicator({
          controller,
          status: "Coming up with an answer",
          icon: "thinking",
        });
        const systemPrompt = RESPOND_TO_NUTRITION_MESSAGE_SYSTEM_PROMPT();
        const mostRecentMessages: CoreMessage[] = await convertToCoreMessages(
          stripMessagesOfCitations(chat.messages.slice(-HISTORY_CONTEXT_LENGTH))
        );

        const citations: Citation[] = [];
        queueAssistantResponse({
          controller,
          providers,
          providerName: PROVIDER_NAME,
          messages: mostRecentMessages,
          model_name: MODEL_NAME,
          systemPrompt,
          citations,
          error_message: DEFAULT_RESPONSE_MESSAGE,
          temperature: NUTRITION_RESPONSE_TEMPERATURE,
        });
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  }

  static async respondToLabworkMessage(
    chat: Chat,
    providers: AIProviders
  ): Promise<Response> {
    /**
     * Respond to the user when they send a RANDOM message
     */
    const PROVIDER_NAME: ProviderName = LABWORK_RESPONSE_PROVIDER;
    const MODEL_NAME: string = LABWORK_RESPONSE_MODEL;

    const stream = new ReadableStream({
      async start(controller) {
        queueIndicator({
          controller,
          status: "Coming up with an answer",
          icon: "thinking",
        });
        const systemPrompt = RESPOND_TO_LABWORK_MESSAGE_SYSTEM_PROMPT();
        const mostRecentMessages: CoreMessage[] = await convertToCoreMessages(
          stripMessagesOfCitations(chat.messages.slice(-HISTORY_CONTEXT_LENGTH))
        );

        const citations: Citation[] = [];
        queueAssistantResponse({
          controller,
          providers,
          providerName: PROVIDER_NAME,
          messages: mostRecentMessages,
          model_name: MODEL_NAME,
          systemPrompt,
          citations,
          error_message: DEFAULT_RESPONSE_MESSAGE,
          temperature: LABWORK_RESPONSE_TEMPERATURE,
        });
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  }

  static async respondToExerciseMessage(
    chat: Chat,
    providers: AIProviders
  ): Promise<Response> {
    /**
     * Respond to the user when they send a RANDOM message
     */
    const PROVIDER_NAME: ProviderName = EXERCISE_RESPONSE_PROVIDER;
    const MODEL_NAME: string = EXERCISE_RESPONSE_MODEL;

    const stream = new ReadableStream({
      async start(controller) {
        queueIndicator({
          controller,
          status: "Coming up with an answer",
          icon: "thinking",
        });
        const systemPrompt = RESPOND_TO_EXERCISE_MESSAGE_SYSTEM_PROMPT();
        const mostRecentMessages: CoreMessage[] = await convertToCoreMessages(
          stripMessagesOfCitations(chat.messages.slice(-HISTORY_CONTEXT_LENGTH))
        );

        const citations: Citation[] = [];
        queueAssistantResponse({
          controller,
          providers,
          providerName: PROVIDER_NAME,
          messages: mostRecentMessages,
          model_name: MODEL_NAME,
          systemPrompt,
          citations,
          error_message: DEFAULT_RESPONSE_MESSAGE,
          temperature: EXERCISE_RESPONSE_TEMPERATURE,
        });
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  }

  static async respondToHostileMessage(
    chat: Chat,
    providers: AIProviders
  ): Promise<Response> {
    /**
     * Respond to the user when they send a HOSTILE message
     */
    const PROVIDER_NAME: ProviderName = HOSTILE_RESPONSE_PROVIDER;
    const MODEL_NAME: string = HOSTILE_RESPONSE_MODEL;

    const stream = new ReadableStream({
      async start(controller) {
        queueIndicator({
          controller,
          status: "Coming up with an answer",
          icon: "thinking",
        });
        const systemPrompt = RESPOND_TO_HOSTILE_MESSAGE_SYSTEM_PROMPT();
        const citations: Citation[] = [];
        queueAssistantResponse({
          controller,
          providers,
          providerName: PROVIDER_NAME,
          messages: [],
          model_name: MODEL_NAME,
          systemPrompt,
          citations,
          error_message: DEFAULT_RESPONSE_MESSAGE,
          temperature: HOSTILE_RESPONSE_TEMPERATURE,
        });
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  }

  static async respondToQuestion(
    chat: Chat,
    providers: AIProviders,
    index: any
  ): Promise<Response> {
    /**
     * Respond to the user when they send a QUESTION
     */
    const PROVIDER_NAME: ProviderName = QUESTION_RESPONSE_PROVIDER;
    const MODEL_NAME: string = QUESTION_RESPONSE_MODEL;

    const stream = new ReadableStream({
      async start(controller) {
        queueIndicator({
          controller,
          status: "Figuring out what your answer looks like",
          icon: "thinking",
        });
        try {
          const hypotheticalData: string = await generateHypotheticalData(
            chat,
            providers.openai
          );
          const { embedding }: { embedding: number[] } =
            await embedHypotheticalData(hypotheticalData, providers.openai);
          queueIndicator({
            controller,
            status: "Reading through documents",
            icon: "searching",
          });
          const chunks: Chunk[] = await searchForChunksUsingEmbedding(
            embedding,
            index
          );
          const sources: Source[] = await getSourcesFromChunks(chunks);
          queueIndicator({
            controller,
            status: `Read over ${sources.length} documents`,
            icon: "documents",
          });
          const citations: Citation[] = await getCitationsFromChunks(chunks);
          const contextFromSources = await getContextFromSources(sources);
          const systemPrompt =
            RESPOND_TO_QUESTION_SYSTEM_PROMPT(contextFromSources);
          queueIndicator({
            controller,
            status: "Coming up with an answer",
            icon: "thinking",
          });
          queueAssistantResponse({
            controller,
            providers,
            providerName: PROVIDER_NAME,
            messages: stripMessagesOfCitations(
              chat.messages.slice(-HISTORY_CONTEXT_LENGTH)
            ),
            model_name: MODEL_NAME,
            systemPrompt,
            citations,
            error_message: DEFAULT_RESPONSE_MESSAGE,
            temperature: QUESTION_RESPONSE_TEMPERATURE,
          });
        } catch (error: any) {
          console.error("Error in respondToQuestion:", error);
          queueError({
            controller,
            error_message: error.message ?? DEFAULT_RESPONSE_MESSAGE,
          });
          queueAssistantResponse({
            controller,
            providers,
            providerName: PROVIDER_NAME,
            messages: [],
            model_name: MODEL_NAME,
            systemPrompt: RESPOND_TO_QUESTION_BACKUP_SYSTEM_PROMPT(),
            citations: [],
            error_message: DEFAULT_RESPONSE_MESSAGE,
            temperature: QUESTION_RESPONSE_TEMPERATURE,
          });
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  }
}
