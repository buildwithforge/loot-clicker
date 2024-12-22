import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { useClickStore } from './click';

interface AchievementState {
  achievements: Record<string, boolean>;
  check: () => void;
}

export const useAchievementStore = create<AchievementState>()(
  devtools(
    persist(
      (set) => ({
        achievements: {},

        check: () =>
          set((state) => {
            const { total } = useClickStore.getState();

            if (total >= 100 && !state.achievements.gold100) {
              state.achievements.gold100 = true;
            }

            return state;
          }),
      }),

      {
        name: 'achievement-storage',
      },
    ),
  ),
);
