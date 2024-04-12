import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname: string) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstname,
            lastname
        }
    })
    console.log(res);
}
insertUser("adityaswamii@gmail.com", "aditya98765", "aditya", "swami");