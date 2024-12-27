import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { AchievementId } from '../types';
import { createAchievement, getItem } from '../utils';
import { useClickStore, useUserStore } from '.';

type AchievementState = Record<AchievementId, number> & {
  update: () => Promise<void>;
};

export const useAchievementStore = create<AchievementState>()(
  devtools(
    persist(
      (set, get) => ({
        gold100: 0,
        gold1000: 0,
        gold10000: 0,

        update: async () => {
          const now = Date.now();
          const state = get();
          const { total } = useClickStore.getState();
          const { achievementSpaceId: userSpaceId, id: userId } =
            useUserStore.getState();

          if (total >= 100 && !state.gold100) {
            set({ gold100: now });

            createAchievement({
              itemId: getItem(AchievementId.gold100).id,
              userId,
              userSpaceId,
            });
          } else if (total >= 1000 && !state.gold1000) {
            set({ gold1000: now });

            createAchievement({
              itemId: getItem(AchievementId.gold1000).id,
              userId,
              userSpaceId,
            });
          } else if (total >= 10000 && !state.gold10000) {
            set({ gold10000: now });

            createAchievement({
              itemId: getItem(AchievementId.gold10000).id,
              userId,
              userSpaceId,
            });
          }
        },
      }),

      {
        name: 'achievement-storage',
      },
    ),
  ),
);
