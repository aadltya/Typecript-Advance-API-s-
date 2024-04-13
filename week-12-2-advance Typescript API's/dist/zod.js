"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const app = (0, express_1.default)();
const userProfileSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "name cannot be empty" }),
    email: zod_1.z.string().email({ message: "Invalid email format" }),
    age: zod_1.z.number().min(18, { message: "You are not an adult yet" }).optional(),
});
app.put('/', (req, res, next) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody = req.body;
    if (!success) {
        res.status(411).json({});
        return;
    }
    //update logic 
    res.json({
        msg: "user updated"
    });
});
app.listen(3000);
