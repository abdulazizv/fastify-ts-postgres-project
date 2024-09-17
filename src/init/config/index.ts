import package_json from "@/package.json";
import dotenv from "dotenv";

const local_env = dotenv.config({ path: ".env" });

const get_env = <_, T>(name: string, def: T | string = ""): T | string => {
	try {
		if (process.env[name]) return process.env[name];
		if (local_env?.parsed[name]) return local_env?.parsed[name];
		return def;
	} catch (error) {
		return def;
	}
};

export const app = {
	name: package_json.name,
	version: package_json.version,
	secret: get_env("JWT_SECRET", ""),
	environment: get_env("NODE_ENV", "development"),
};

export const server = {
	host: String(get_env("SERVER_ADDR", "0.0.0.0")),
	port: Number(get_env("SERVER_PORT", 2004)),
};

export const database = {
	postgres: {
		host: get_env("PG_HOST", "localhost"),
		port: Number(get_env("PG_PORT", 27017)),
		user: get_env("PG_USER", "test"),
		password: get_env("PG_PASS", "testpassword"),
		dbname: get_env("PG_DB", "marker"),
	},
};

export const messagebroker = {
	rabbitmq: {
		host: get_env("RABBITMQ_HOST", "localhost"),
		port: get_env("RABBITMQ_PORT", 5672),
		connection: get_env("RABBITMQ_CONNECTION", "amqp"),
		login: get_env("RABBITMQ_LOGIN", ""),
		password: get_env("RABBITMQ_PASSWORD", ""),
		queue_name: get_env("RABBITMQ_QUEUE_NAME", "queue_name"),
	},
};

export default {
	app,
	server,
	database,
	messagebroker,
};
