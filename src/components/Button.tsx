import { useCallback } from 'react';

import { useClickStore, useCursorStore, useMessageStore } from '../state';

export default function Button() {
  const clickStore = useClickStore();
  const cursorStore = useCursorStore();
  const messageStore = useMessageStore();

  const handleClick = useCallback(() => {
    clickStore.increase(cursorStore.output.current);
    messageStore.update();
  }, []);

  return (
    <p>
      <button
        className="flex cursor-[url(/hammer.png),_pointer]"
        data-twe-ripple-color="light"
        data-twe-ripple-init
        onClick={handleClick}
        title="Earn Gold"
        type="button"
      >
        <img alt="Hammer" className="mr-1" src="/hammer.png" />
        Earn Gold
      </button>
    </p>
  );
}
