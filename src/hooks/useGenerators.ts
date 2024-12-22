import { useEffect } from 'react';

import { useGeneratorStore } from '../state';
import type { GeneratorId } from '../types';
import { getItems } from '../utils';

export function useGenerators() {
  const generatorStore = useGeneratorStore();

  const generators = (Object.keys(generatorStore) as GeneratorId[])
    .filter((generatorId) => /^generator\d+$/.test(generatorId))
    .map((generatorId) => ({
      id: generatorId,
      ...generatorStore[generatorId],
    }));

  useEffect(() => {
    getItems().then((items) => {
      items.forEach((item) => {
        const generator = generators.find(
          (generator) =>
            generator.label.toLowerCase() === item.name.toLowerCase(),
        );

        if (generator && item.thumbnail) {
          generatorStore.setThumbnail(generator.id, item.thumbnail);
        }
      });
    });
  }, []);

  return generators;
}
