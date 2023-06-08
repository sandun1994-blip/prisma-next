import prisma from "@/lib/prisma";


export async function GET(){

    const users =await prisma.user.findMany({
        where:{
            post:{
                some:{
                    published:true
                }
            }
        },
        select:{
            post:true,
            name:true
        }
    })

    return new Response(JSON.stringify(users))
}