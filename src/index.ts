import "reflect-metadata";
import { init as postgres_init } from "@/src/init/database/postgres";
import Fastify from "fastify";
import config from "@config";
import skinportRoutes from "./core/routes/skinport.routes";
import userRoutes from "./core/routes/user.routes";

const fastify = Fastify({ logger: true });
const port = config.server.port;

fastify.register(skinportRoutes);
fastify.register(userRoutes);

async function main() {
	try {
		await fastify.listen(port);
		await postgres_init();

		fastify.log.info(`Server listening on port ${port}`);
	} catch (e) {
		fastify.log.error(e);
		process.exit(1);
	}
}

void main();