export interface Deployment {

    id: string;
    application: string;
    environment: string;
    timestamp: number;
    status: boolean;
    version: string;
    metedata: any;

}