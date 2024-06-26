import { Client } from "pg"; //postgresql://my-postgres:mypassword@localhost:5432/postgres?sslmode=disable

const client = new Client ({
    connectionString: "postgresql://postgres:mypassword@localhost:5432/postgres"
})

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

createUsersTable();

// async function insertData() {
//     await client.connect();
//     const ans = await client.query(`
        
//     `)
// }