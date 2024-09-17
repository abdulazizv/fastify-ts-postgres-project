import logger from "@/src/init/logger";
import config from "@/src/init/config";

import { Pool } from "pg";

export const client = new Pool({
	host: config.database.postgres.host,
	port: config.database.postgres.port,
	user: config.database.postgres.user,
	password: config.database.postgres.password,
});

export async function init() {
	await client.connect();
	logger.info("Postgres connected");
}

export default client;
