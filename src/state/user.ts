import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { createUser } from '../utils';

type UserState = Awaited<ReturnType<typeof createUser>> & {
  create: () => Promise<void>;
};

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        createdAt: '',
        externalId: '',
        id: '',
        teamId: '',
        updatedAt: '',

        create: async () => set(await createUser()),
      }),

      {
        name: 'user-storage',
      },
    ),
  ),
);
