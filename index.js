const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    //WRITE - create, createMany
        await prisma.user.create({
            data: {
            email: 'viola@prisma.io',
            name: 'Viola',
            },
        })

        //READ - finaUnique, findMany, findFirst
        /*const findUsers = await prisma.user.findMany({
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
        await prisma.user.update({
            where:{
                email: 'viola@prisma.io',
            },
            data: {
                name: 'Viola de Magnificent',
            },

        })

        await prisma.user.create({
            data: {
            email: 'honza@ssps.cz',
            name: 'Honza',
            profileViews: 20,
            role: 'ADMIN',
            },
        })

        const findUserId = await prisma.user.findFirst({
            where: {
                name: 'Honza'
            },
            select:{
                id: true,
            },
        })
        console.log(findUserId);

        await prisma.post.createMany({
            data: [
                { title: "Ahoj všichni", published: true, authorId: findUserId.id, views: 7000, likes: 3000},
                { title: "Ahoj", published: true, authorId: findUserId.id, views: 5000, likes: 2000},
                { title: "Naxšéro", published: true, authorId: findUserId.id, views: 70000, likes: 30000},
            ],
            skipDuplicates: true,
        })
        await prisma.category.createMany({
            data: [
                { name: 'vaření'},
                { name: 'sport'},
                { name: 'zivotjezivot'},
            ],
        })
        const findCookingId = await prisma.category.findUnique({
            where: {
                name: 'vaření',
            },
            select: {
                id: true,
            },
        })
        const findSportId = await prisma.category.findUnique({
            where: {name: 'sport',},
            select: {id: true,},
        })
        const post = await prisma.post.create({
            data: {
                title: 'už to nedávám',
                published: true,
                authorId: findUserId.id,
                views: 100,
                likes: 100,
            },
        })
        const postCategory = await prisma.postCategory.create({
            data: {
                postId: post.id,
                categoryId: findSportId.id,
            },
        })
        console.log("hotovo");
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