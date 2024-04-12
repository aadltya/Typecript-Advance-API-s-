import { Client } from "pg";

async function getUser(email: string) {
    const client = new Client ({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mypassword'
    });

    try {
        await client.connect(); 
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const result = client.query(query, values);

        if((await result).rows.length > 0) {
            console.log('User found', (await result).rows[0]);
            return (await result).rows[0];
        } else {
            console.log('No user found');
            return null;
        }
    } catch(err) {
        console.error('Error fetching user', err);
        throw err;
    } finally {
        await client.end();
    }
}

getUser("swami@gmail.com").catch(console.error);