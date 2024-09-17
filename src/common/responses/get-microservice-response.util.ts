import { StatusResponseEnum } from '../enums/status-response.enum';
import { MicroserviceResponseInterface } from '../interfaces/microservice-response.interface';
import { HttpStatus } from '../types/general/http-response.status';

export const getMicroResponse = <T>(
	status: StatusResponseEnum,
	code = HttpStatus.OK,
	message = 'Success',
	data: T
): MicroserviceResponseInterface<T> => {
	return { status, code, message, data };
};

export const getMicroEmptySuccessResponse =
	(): MicroserviceResponseInterface<null> => {
		return {
			status: StatusResponseEnum.success,
			code: HttpStatus.OK,
			message: 'Success',
			data: null,
		};
	};

export const getMicroSuccessResponse = <T>(
	message: string,
	data: T
): MicroserviceResponseInterface<T> => {
	return {
		status: StatusResponseEnum.success,
		code: HttpStatus.OK,
		message,
		data,
	};
};

export const getMicroEmptySuccessCreatedResponse =
	(): MicroserviceResponseInterface<null> => {
		return {
			status: StatusResponseEnum.success,
			code: HttpStatus.CREATED,
			message: 'Created',
			data: null,
		};
	};
