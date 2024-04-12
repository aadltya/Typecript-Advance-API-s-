import { PrismaClient } from "@prisma/client"
import { log } from "console"
const prisma = new PrismaClient()

async function getUser(username: string) {
    const res = await prisma.user.findFirst({
        where: {
            email: username
        }
    })
    log(res)
}

getUser("adityaswamii@gmail.com")