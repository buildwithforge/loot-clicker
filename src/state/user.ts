import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserState {
  id: ReturnType<typeof crypto.randomUUID>;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      () => ({
        id: crypto.randomUUID(),
      }),

      {
        name: 'user-storage',
      },
    ),
  ),
);
