import { useEffect } from 'react';
import { initTWE, Ripple } from 'tw-elements';

import { useUserStore } from '../state';
import Achievements from './Achievements';
import Button from './Button';
import Counter from './Counter';
import Cursor from './Cursor';
import Generators from './Generators';
import Message from './Message';

export default function App() {
  const userStore = useUserStore();

  useEffect(() => {
    initTWE({ Ripple });

    if (!userStore.id) {
      userStore.create();
    }
  }, []);

  return (
    <main>
      <Message />

      <section className="px-9 py-6">
        <h1>Loot Clicker</h1>
        <Counter />
        <Button />
        <Achievements />

        <table>
          <thead>
            <tr>
              <th />
              <th>Owned</th>
              <th>Cost</th>
              <th>Current Output</th>
              <th>Next Output</th>
            </tr>
          </thead>

          <tbody>
            <Cursor />
            <Generators />
          </tbody>
        </table>
      </section>
    </main>
  );
}
