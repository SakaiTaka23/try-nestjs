import { PrismaClient } from '@prisma/client';
import faker from 'faker';

const prisma = new PrismaClient();

async function main() {
  await prisma.categoriesOnPosts.deleteMany();
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.internet.userName(),
        posts: {
          create: {
            title: faker.name.title(),
          },
        },
      },
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
