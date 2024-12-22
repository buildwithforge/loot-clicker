import Forge from '@forgegames/sdk';

const username = import.meta.env.VITE_FORGE_CLIENT_ID;
const password = import.meta.env.VITE_FORGE_CLIENT_SECRET;

const forge = new Forge({
  username,
  password,
});

export function getItems() {
  return forge.items.list();
}
