import { useCallback } from 'react';

import { images } from '../assets';
import {
  useAchievementStore,
  useClickStore,
  useCursorStore,
  useMessageStore,
} from '../state';

export default function Button() {
  const achievementStore = useAchievementStore();
  const clickStore = useClickStore();
  const cursorStore = useCursorStore();
  const messageStore = useMessageStore();

  const handleClick = useCallback(() => {
    clickStore.increase(cursorStore.output.current);
    messageStore.update();
    achievementStore.update();
  }, []);

  return (
    <p>
      <button
        className="flex"
        data-twe-ripple-color="light"
        data-twe-ripple-init
        onClick={handleClick}
        title="Earn Gold"
        type="button"
      >
        <img alt="Hammer" className="mr-1" src={images.hammer} />
        Earn Gold
      </button>
    </p>
  );
}
