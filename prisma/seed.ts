import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "John",
    email: "John@prisma.io",
    post: {
      create: [
        {
          title: "Join the Prisma Slack",
          published: true,
          likeNum: 10,
          category: {
            create: [
              {
                name: "Data Base",
              },
              {
                name: "Big Data",
              },
            ],
          },
        },
        {
          title: "Follow Prisma on Twitter",
          category: {
            connect: [
              {
                id: 1,
              },
            ],
          },
          published: true,
        },
      ],
    },
  },
  {
    name: "Jack",
    email: "jack@prisma.io",
    post: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          category: {
            connect: [
              {
                id: 1,
              },
            ],
          },
          published: true,
        },
      ],
    },
  },
  {
    name: "sara",
    email: "sara@prisma.io",
    post: {
      create: [
        {
          title: "Ask a question about Prisma on GitHub",

          published: true,
          category: {
            connect: [
              {
                id: 2,
              },
            ],
          },
        },
        {
          title: "Prisma on YouTube",
          category: {
            connect: [
              {
                id: 1,
              },
            ],
          },
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });