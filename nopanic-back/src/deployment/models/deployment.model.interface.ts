export interface Deployment {

    id: string;
    application: string;
    environment: string;
    timestamp: number;
    version: string;
    metedata: any;
}