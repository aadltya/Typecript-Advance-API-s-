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
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://postgres:mypassword@localhost:5432/postgres"
        });
        try {
            yield client.connect();
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ('aditya22', 'aditya@gmail.com', 'adity1234');";
            const res = yield client.query(insertQuery);
            console.log("insertion success:", res);
        }
        catch (err) {
            console.error("Error during insertion:", err);
        }
        finally {
            yield client.end();
        }
    });
}
insertData();
