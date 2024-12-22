import { useEffect, useState } from 'react';

import { useAchievementStore } from '../state';
import type { AchievementId } from '../types';
import { getItems } from '../utils';

export function useAchievements() {
  const [achievements, setAchievements] = useState<
    { name: string; thumbnail: string; date: number }[]
  >([]);
  const achievementStore = useAchievementStore();

  useEffect(() => {
    getItems().then((items) => {
      setAchievements(
        items
          .filter((item) => achievementStore[item.name as AchievementId])
          .map((item) => ({
            name: item.name,
            thumbnail: item.thumbnail!,
            date: achievementStore[item.name as AchievementId],
          })),
      );
    });
  }, [achievementStore]);

  return achievements;
}
