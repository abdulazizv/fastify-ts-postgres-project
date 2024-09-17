import { StatusResponseEnum } from '../enums/status-response.enum';

export type MicroserviceResponseInterface<T> = {
    status: StatusResponseEnum;

    message: string;

    code: number;

    data?: T;
}