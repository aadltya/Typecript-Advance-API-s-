import express from 'express';
import { z } from 'zod';

const app = express();

const userProfileSchema = z.object({
    name: z.string().min(1, {message: "name cannot be empty"}),
    email: z.string().email({message: "Invalid email format"}),
    age: z.number().min(18, {message: "You are not an adult yet"}).optional(),
});

type StringZodType = z.infer<typeof userProfileSchema>;

app.put('/', (req, res, next) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody: StringZodType = req.body;

    if(!success) {
        res.status(411).json({});
        return
    }

    //update logic 
    res.json({
        msg: "user updated"
    })
});

app.listen(3000);