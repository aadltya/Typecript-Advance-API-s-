import { PrismaClient } from "@prisma/client"
import { log } from "console"
const prisma = new PrismaClient()

interface updateParams {
    firstname: string,
    lastname: string
}

async function updateUser(username: string, {
    firstname,
    lastname
}: updateParams) {
    const res = await prisma.user.update({
        where: {email: username},
        data: {
            firstname,
            lastname
        }
    })
    log(res);
}

updateUser("adityaswami@gmail.com", {
    firstname: "monu",
    lastname: "tommy"
})