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

export function getItem(name: string) {
  const item = items?.find(
    (item) => item.name.toLowerCase() === name.toLowerCase(),
  );
  if (!item) {
    throw new Error(`Item not found: ${name}`);
  }
  return item;
}

export async function createUser() {
  return forge.users.create({ externalId: crypto.randomUUID() });
}

export async function createAchievementSpace(
  userId: string,
  externalId: string | null,
) {
  return forge.users.spaces.create(userId, {
    spaceId: import.meta.env.VITE_FORGE_STASH_SPACE_ID,
    externalId,
  });
}

export function createAchievement({
  itemId,
  userId,
  userSpaceId,
}: {
  itemId: string;
  userId: string;
  userSpaceId: string;
}) {
  return forge.itemInstances.create({
    itemAttributeInstances: [],
    itemId,
    userId,
    userSpaceId,
  });
}
