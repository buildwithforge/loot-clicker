import Forge from '@forgegames/sdk';

const forge = new Forge({
  username: import.meta.env.VITE_FORGE_CLIENT_ID,
  password: import.meta.env.VITE_FORGE_CLIENT_SECRET,
});

let items: Awaited<ReturnType<typeof forge.items.list>>;

export async function getItems() {
  if (!items) {
    items = await forge.items.list();
  }
  return items;
}

export async function createUser() {
  return forge.users.create({ externalId: crypto.randomUUID() });
}
