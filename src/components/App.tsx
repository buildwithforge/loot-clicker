import { useEffect } from 'react';
import { initTWE, Ripple } from 'tw-elements';

import Achievements from '../components/Achievements';
import Button from '../components/Button';
import Counter from '../components/Counter';
import Cursor from '../components/Cursor';
import Generators from '../components/Generators';
import Message from '../components/Message';

export default function App() {
  useEffect(() => {
    initTWE({ Ripple });
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
