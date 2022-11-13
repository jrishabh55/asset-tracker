import { PrismaClient } from '@prisma/client';

import asyncComponent from '@/utils/asyncComponent';

const getUsers = async () => {
  const prisma = new PrismaClient();
  return prisma.user.findMany();
};

const UserSelect = async () => {
  const users = await getUsers();

  return (
    <select className="w-full" defaultValue={''} name="user.id">
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default asyncComponent(UserSelect);
