import { useCallback } from 'react';

import { images } from '../assets';
import { useClickStore, useCursorStore, useMessageStore } from '../state';

export default function Cursor() {
  const clickStore = useClickStore();
  const cursorStore = useCursorStore();
  const messageStore = useMessageStore();

  const handleClick = useCallback(() => {
    clickStore.decrease(cursorStore.cost.next);
    cursorStore.purchase();
    messageStore.update(cursorStore.message);
  }, []);

  return (
    <tr>
      <td>
        <button
          className="flex w-32"
          disabled={clickStore.current < cursorStore.cost.next}
          title="Hammer"
          onClick={handleClick}
        >
          <img alt="Hammer" className="mr-1" src={images.hammer} />
          Hammer
        </button>
      </td>

      <td>{(cursorStore.owned - 1).toLocaleString()}</td>

      <td>{cursorStore.cost.next.toLocaleString()}</td>

      {[cursorStore.output.current, cursorStore.output.next].map(
        (output, index) => (
          <td key={index}>{`${output.toLocaleString()} gold`}</td>
        ),
      )}
    </tr>
  );
}
