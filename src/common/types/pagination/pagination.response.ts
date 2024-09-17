export interface PaginationResponse {
    data: any[];
    isLast: boolean;
    page: number;
    size: number;
    total: number;
}