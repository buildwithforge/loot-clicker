import { useCallback } from 'react';

import { images } from '../assets';
import { useClickStore, useCursorStore } from '../state';

export default function Button() {
  const increase = useClickStore((state) => state.increase);
  const current = useCursorStore((state) => state.output.current);

  const handleClick = useCallback(() => {
    increase(current);
  }, [current]);

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
