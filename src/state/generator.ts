import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { Cost, GeneratorId, Output } from '../types';
import { calculateNextCost } from '../utils';
import { useAchievementStore, useClickStore, useMessageStore } from '.';

interface Generator {
  label: string;
  message: string;
  owned: number;
  delay: number; // seconds
  cost: Cost;
  output: Output;
  intervalId?: number;
  thumbnail?: string;
}

type GeneratorState = Record<GeneratorId, Generator> & {
  purchase: (generatorId: GeneratorId) => void;
  setInterval: (generatorId: GeneratorId) => void;
  setThumbnail: (generatorId: GeneratorId, thumbnail: string) => void;
};

/**
 * @see {@link https://coderpatsy.bitbucket.io/cookies/cookies.html}
 */
export const useGeneratorStore = create<GeneratorState>()(
  devtools(
    persist(
      (set) => ({
        generator1: {
          label: 'Club',
          message: 'Purchased club.',
          owned: 0,
          delay: 10, // seconds
          cost: {
            base: 15,
            next: 15,
            rate: 1.15,
          },
          output: {
            base: 1,
            next: 1,
            current: 0,
          },
        },

        generator2: {
          label: 'Torch',
          message: 'Purchased torch.',
          owned: 0,
          delay: 1, // seconds
          cost: {
            base: 100,
            next: 100,
            rate: 1.15,
          },
          output: {
            base: 1,
            next: 1,
            current: 0,
          },
        },

        generator3: {
          label: 'Rope',
          message: 'Purchased rope.',
          owned: 0,
          delay: 1, // seconds
          cost: {
            // 1,100
            base: 11e2,
            next: 11e2,
            rate: 1.15,
          },
          output: {
            base: 8,
            next: 8,
            current: 0,
          },
        },

        generator4: {
          label: 'Nails',
          message: 'Purchased nails.',
          owned: 0,
          delay: 1, // seconds
          cost: {
            // 12,000
            base: 12e3,
            next: 12e3,
            rate: 1.15,
          },
          output: {
            base: 47,
            next: 47,
            current: 0,
          },
        },

        generator5: {
          label: 'Bag',
          message: 'Purchased bag.',
          owned: 0,
          delay: 1, // seconds
          cost: {
            // 130,000
            base: 13e4,
            next: 13e4,
            rate: 1.15,
          },
          output: {
            base: 260,
            next: 260,
            current: 0,
          },
        },

        generator6: {
          label: 'Shovel',
          message: 'Purchased shovel.',
          owned: 0,
          delay: 1, // seconds
          cost: {
            // 1,400,000
            base: 14e5,
            next: 14e5,
            rate: 1.15,
          },
          output: {
            // 1,400
            base: 14e2,
            next: 14e2,
            current: 0,
          },
        },

        generator7: {
          label: 'Boots',
          message: 'Purchased boots.',
          owned: 0,
          delay: 1, // seconds
          cost: {
            // 20,000,000
            base: 2e7,
            next: 2e7,
            rate: 1.15,
          },
          output: {
            // 7,800
            base: 78e2,
            next: 78e2,
            current: 0,
          },
        },

        generator8: {
          label: 'Shield',
          message: 'Purchased shield.',
          owned: 0,
          delay: 1, // seconds
          cost: {
            // 330,000,000
            base: 33e7,
            next: 33e7,
            rate: 1.15,
          },
          output: {
            // 44,000
            base: 44e3,
            next: 44e3,
            current: 0,
          },
        },

        generator9: {
          label: 'Arrow',
          message: 'Purchased arrow.',
          owned: 0,
          delay: 1, // seconds
          cost: {
            // 5,100,000,000
            base: 51e8,
            next: 51e8,
            rate: 1.15,
          },
          output: {
            // 260,000
            base: 26e4,
            next: 26e4,
            current: 0,
          },
        },

        generator10: {
          label: 'Bow',
          message: 'Purchased bow.',
          owned: 0,
          delay: 1, // seconds
          cost: {
            // 75,000,000,000
            base: 75e9,
            next: 75e9,
            rate: 1.15,
          },
          output: {
            // 1,600,000
            base: 16e5,
            next: 16e5,
            current: 0,
          },
        },

        generator11: {
          label: 'Helmet',
          message: 'Purchased helmet.',
          owned: 0,
          delay: 1, // seconds
          cost: {
            // 1,000,000,000,000
            base: 1e12,
            next: 1e12,
            rate: 1.15,
          },
          output: {
            // 10,000,000
            base: 1e7,
            next: 1e7,
            current: 0,
          },
        },

        generator12: {
          label: 'Armor',
          message: 'Purchased armor.',
          owned: 0,
          delay: 1, // seconds
          cost: {
            // 14,000,000,000,000
            base: 14e12,
            next: 14e12,
            rate: 1.15,
          },
          output: {
            // 65,000,000
            base: 65e6,
            next: 65e6,
            current: 0,
          },
        },

        generator13: {
          label: 'Axe',
          message: 'Purchased axe.',
          owned: 0,
          delay: 1, // seconds
          cost: {
            // 170,000,000,000,000
            base: 17e13,
            next: 17e13,
            rate: 1.15,
          },
          output: {
            // 430,000,000
            base: 43e7,
            next: 43e7,
            current: 0,
          },
        },

        generator14: {
          label: 'Pickaxe',
          message: 'Purchased pickaxe.',
          owned: 0,
          delay: 1, // seconds
          cost: {
            // 2,100,000,000,000,000
            base: 21e14,
            next: 21e14,
            rate: 1.15,
          },
          output: {
            // 2,900,000,000
            base: 29e8,
            next: 29e8,
            current: 0,
          },
        },

        generator15: {
          label: 'Sword',
          message: 'Purchased sword.',
          owned: 0,
          delay: 1, // seconds
          cost: {
            // 26,000,000,000,000,000
            base: 26e15,
            next: 26e15,
            rate: 1.15,
          },
          output: {
            // 21,000,000,000
            base: 21e9,
            next: 21e9,
            current: 0,
          },
        },

        generator16: {
          label: 'Staff',
          message: 'Purchased staff.',
          owned: 0,
          delay: 1, // seconds
          cost: {
            // 310,000,000,000,000,000
            base: 31e16,
            next: 31e16,
            rate: 1.15,
          },
          output: {
            // 150,000,000,000
            base: 15e10,
            next: 15e10,
            current: 0,
          },
        },

        purchase: (generatorId) =>
          set((state) => {
            const generator = state[generatorId];
            const { cost, output } = generator;
            const owned = ++generator.owned;

            cost.next = calculateNextCost(cost.base, cost.rate, owned);
            output.current = output.next;
            output.next = Math.round(output.base * (owned + 1));

            state.setInterval(generatorId);

            return state;
          }),

        setInterval: (generatorId) =>
          set((state) => {
            const generator = state[generatorId];

            if (generator.intervalId) {
              clearInterval(generator.intervalId);
            }

            generator.intervalId = setInterval(() => {
              useClickStore.getState().increase(generator.output.current);
              useMessageStore.getState().update();
              useAchievementStore.getState().update();
            }, generator.delay * 1000) as unknown as number;

            return state;
          }),

        setThumbnail: (generatorId, thumbnail) =>
          set((state) => {
            const generator = state[generatorId];
            generator.thumbnail = thumbnail;
            return state;
          }),
      }),

      {
        name: 'generator-storage',
      },
    ),
  ),
);
