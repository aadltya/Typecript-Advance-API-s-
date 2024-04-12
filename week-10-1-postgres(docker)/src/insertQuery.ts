import { Client } from "pg";

async function insertData() {
    const client = new Client({
    connectionString: "postgresql://postgres:mypassword@localhost:5432/postgres"
    });

    try {
        await client.connect();
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ('aditya22', 'aditya@gmail.com', 'adity1234');";  
        const res = await client.query(insertQuery);
        console.log("insertion success:", res);
    } catch (err) {
        console.error("Error during insertion:", err);
    } finally {
        await client.end();
    }
}
insertData();

