import {  FastifyReply, FastifyRequest } from "fastify";
import * as userService from "../services/users.service";

export default async function (fastify: any) {
    fastify.post('/user/deduct', async(request: FastifyRequest, reply: FastifyReply) => {
        const { userId, amount } = request.body as { userId: number, amount: number };

        try {
            const data = await userService.deductBalance(userId, amount);
            return reply.status(data.error_code).send(data);
        } catch(e) {
            console.log(e)
            return reply.status(500).send({ success: false, data: null, error_code: 500, message: "Internal server error" });
        }
    })
}