import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { AchievementId } from '../types';
import { useClickStore } from './click';

type AchievementState = Record<AchievementId, number> & {
  update: () => void;
};

export const useAchievementStore = create<AchievementState>()(
  devtools(
    persist(
      (set) => ({
        gold100: 0,
        gold1000: 0,
        gold10000: 0,

        update: () =>
          set((state) => {
            const { total } = useClickStore.getState();

            if (total >= 100 && !state.gold100) {
              state.gold100 = Date.now();
            } else if (total >= 1000 && !state.gold1000) {
              state.gold1000 = Date.now();
            } else if (total >= 10000 && !state.gold10000) {
              state.gold10000 = Date.now();
            }

            return { ...state };
          }),
      }),

      {
        name: 'achievement-storage',
      },
    ),
  ),
);
