import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { createAchievementSpace, createUser } from '../utils';

type UserState = Awaited<ReturnType<typeof createUser>> & {
  achievementSpaceId: string;
  create: () => Promise<void>;
};

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        achievementSpaceId: '',
        createdAt: '',
        externalId: null,
        id: '',
        teamId: '',
        updatedAt: null,

        create: async () => {
          const user = await createUser();
          set(user);

          const space = await createAchievementSpace(user.id, user.externalId);
          set({ achievementSpaceId: space.id });
        },
      }),

      {
        name: 'user-storage',
      },
    ),
  ),
);
