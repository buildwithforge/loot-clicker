import { useAchievementStore } from '../state';

export default function Achievements() {
  const { achievements } = useAchievementStore();
  const hasAchievements = Boolean(Object.keys(achievements).length);

  return (
    <p>
      <details>
        <summary>Achievements</summary>

        {!hasAchievements && 'None'}
      </details>
    </p>
  );
}
