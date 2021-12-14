import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany({
    include: {
      posts: {
        select: {
          id: true,
        },
      },
    },
  });
  // console.dir(allUsers, { depth: null });

  const postCategories = await prisma.post.findMany({
    include: {
      categories: true,
    },
  });
  console.dir(postCategories, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
