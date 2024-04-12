"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            host: 'localhost',
            port: 5432,
            database: 'postgres',
            user: 'postgres',
            password: 'mypassword'
        });
        try {
            yield client.connect();
            const query = 'SELECT * FROM users WHERE email = $1';
            const values = [email];
            const result = client.query(query, values);
            if ((yield result).rows.length > 0) {
                console.log('User found', (yield result).rows[0]);
                return (yield result).rows[0];
            }
            else {
                console.log('No user found');
                return null;
            }
        }
        catch (err) {
            console.error('Error fetching user', err);
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
getUser("aditya@gmail.com").catch(console.error);
