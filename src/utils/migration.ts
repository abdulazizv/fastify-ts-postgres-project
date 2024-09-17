import fs from "node:fs/promises";
import path from "path";

import logger from "@/src/init/logger";
import { client as non_database_client } from "@/src/init/database/postgres/non-database";
import client from "@/src/init/database/postgres";
import config from "@/src/init/config";

async function checkDatabaseExist() {
	const query = `SELECT datname FROM pg_database WHERE datname = '${config.database.postgres.dbname}'`;
	return await non_database_client.query(query);
}

async function createDatabase() {
	await non_database_client.query(
		`CREATE DATABASE ${config.database.postgres.dbname}`
	);
}
async function dropDatabase() {
	await non_database_client.query(
		`revoke connect on database ${config.database.postgres.dbname} from public`
	);
	await non_database_client.query(
		`SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = '${config.database.postgres.dbname}'`
	);
	await non_database_client.query(
		`DROP DATABASE ${config.database.postgres.dbname}`
	);
}
async function runMigrations() {
	try {
		// const checkDbExist = await checkDatabaseExist();
		// if (checkDbExist.rows.length >= 1) {
		// 	await dropDatabase();
		// 	await createDatabase();
		// } else {
		// 	await createDatabase();
		// }
		const migrationDir = path.resolve(
			__dirname,
			"../",
			"init",
			"database",
			"postgres",
			"schema"
		);
		const migrationFiles = await fs.readdir(migrationDir);

		for (const migrationFile of migrationFiles) {
			const filePath = path.join(migrationDir, migrationFile);
			const sqlQuery = await fs.readFile(filePath, "utf8");
			await client.query(sqlQuery).catch((e) => {
				logger.error(e);
			});

			logger.info(`Migration successful: ${migrationFile}`);
		}

		logger.info("All migrations completed.");
	} catch (error) {
		logger.error(error);
		logger.error("\n\nMigration failed.");
	}
}

runMigrations();
