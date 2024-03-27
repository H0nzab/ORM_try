const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    //WRITE - create, createMany
    /*const user = await prisma.user.create({
        data: {
          email: 'viola@prisma.io',
          name: 'Viola',
        },
      })*/

      /*const createMany = await prisma.user.createMany({
        data: [
          { name: 'Bob', email: 'bob@prisma.io' },
          { name: 'Bobo', email: 'bob@prisma.io' }, // Duplicate unique key!
          { name: 'Yewande', email: 'yewande@prisma.io' },
          { name: 'Angelique', email: 'angelique@prisma.io' },
        ],
        skipDuplicates: true, // Skip 'Bobo'
      })*/


      //READ - finaUnique, findMany, findFirst
      /*const user = await prisma.user.findMany({
        where: {
            email: {
                endsWith: 'prisma.io',
            },
        },
        select: {
            name: true,
            email: true,
            posts: {
                select: {
                    likes: true,
                },
            },
        },
      })*/

      // UPDATE - update, updateMany
      /*const user = await prisma.user.update({
        where:{
            email: 'viola@prisma.io',
        },
        data: {
            name: 'Viola de Magnificent',
        },

      })*/

      /*const user = await prisma.user.create({
        data: {
          email: 'honza@ssps.cz',
          name: 'Honza',
          profileViews: 20,
          role: 'ADMIN',
        },
      })*/
      /*const post = await prisma.post.createMany({
        data: [
            { title: "Ahoj všichni", published: true, authorId: 8, views: 7000, likes: 3000},
            { title: "Ahoj", published: true, authorId: 8, views: 5000, likes: 2000},
            { title: "Naxšéro", published: true, authorId: 8, views: 70000, likes: 30000},
        ],
        skipDuplicates: true,
      })*/
      console.log(post)
  }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })