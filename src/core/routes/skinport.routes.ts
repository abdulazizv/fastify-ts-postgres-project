import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import * as skinportService from "../services/skinport.service";

export default async function (fastify: any) {
    fastify.get('/skinport/items', async (request: FastifyRequest, reply: FastifyReply) => {
        const data = await skinportService.getSkinportItems();

        return reply.send(data);
    });
}