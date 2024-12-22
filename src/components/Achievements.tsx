import { useAchievements } from '../hooks';

export default function Achievements() {
  const achievements = useAchievements();

  return (
    <details className="my-3.5">
      <summary>Achievements</summary>

      {!achievements.length && 'None'}

      {achievements.map((achievement, index) => (
        <img
          alt={achievement.name}
          className="mr-1"
          key={index}
          src={achievement.thumbnail}
        />
      ))}
    </details>
  );
}
