import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { useClickStore } from './click';

interface MessageState {
  message: string;
  messages: Record<number, string>;
  update: (message?: string) => void;
}

export const useMessageStore = create<MessageState>()(
  devtools(
    persist(
      (set) => ({
        message: 'Welcome to Loot Clicker.',

        messages: {
          1: 'You earned your first gold!',
          1e1: 'You earned 10 gold.',
          1e2: 'You earned 100 gold.',
          1e3: 'You earned 1,000 gold.',
          1e4: 'You earned 10,000 gold.',
          1e5: 'You earned 100,000 gold.',
          1e6: 'You earned 1,000,000 gold.',
          1e7: 'You earned 10,000,000 gold.',
          1e8: 'You earned 100,000,000 gold.',
          1e9: 'You earned 1,000,000,000 gold.',
          1e10: 'You earned 10,000,000,000 gold.',
          1e12: 'You earned 100,000,000,000 gold.',
          1e13: 'You earned 1,000,000,000,000 gold.',
          1e14: 'You earned 10,000,000,000,000 gold.',
          1e15: 'You earned 100,000,000,000,000 gold.',
          1e16: 'You earned 1,000,000,000,000,000 gold.',
          1e17: 'You earned 10,000,000,000,000,000 gold.',
          1e18: 'You earned 100,000,000,000,000,000 gold.',
          1e19: 'You earned 1,000,000,000,000,000,000 gold.',
          1e20: 'You earned 10,000,000,000,000,000,000 gold.',
          1e21: 'You earned 100,000,000,000,000,000,000 gold.',
          1e22: 'You earned 1,000,000,000,000,000,000,000 gold.',
        },

        update: (message) =>
          set((state) => {
            if (message) {
              return { message };
            }

            // check for exact match in messages table
            const { total } = useClickStore.getState();
            if (state.messages[total]) {
              const message = state.messages[total];
              delete state.messages[total];
              return { message };
            }

            // otherwise compare number of first message
            for (const messageKey in state.messages) {
              const messageId = Number(messageKey);

              if (total >= messageId) {
                const message = state.messages[messageId];
                delete state.messages[messageId];
                return { message };
              }
            }

            return state;
          }),
      }),

      {
        name: 'message-storage',
      },
    ),
  ),
);
