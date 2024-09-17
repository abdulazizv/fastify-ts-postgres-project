import pino from 'pino';
import pretty from 'pino-pretty';

import config from '../config';

const stream = pretty({colorize: true});

export const logger = pino(config.app.environment === 'development' ? stream : {});

export default logger;
