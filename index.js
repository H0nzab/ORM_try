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
      console.log(user)
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