import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from "@nestjs/swagger";

export class Deployment {

    @ApiProperty({ description: 'UUID-v4 generated during the construction of the object.', example: 'a3214d1f-5357-4e73-97a0-c3e04e13ee61' })
    public id: string;

    @ApiProperty({ description: 'Applicatio name.', example: 'backend' })
    public application: string;

    @ApiProperty({ example: 'dev' })
    public environment: string;

    @ApiProperty({ description: 'UTC Timestamp generated during the construction of the object.', example: 1584279449 })
    public timestamp: number;

    @ApiProperty({ description: 'Deployment status, true = OK, false = KO', example: true })
    public status: boolean;

    @ApiProperty({ example: 'v0.1' })
    public version: string;

    @ApiProperty()
    public metedata: any;

    constructor(application: string, environment: string, status: boolean, version: string, metadata: any, id?: string, timestamp?: number) {
        this.application = application;
        this.environment = environment;
        this.status = status;
        this.version = version;
        this.metedata = metadata;

        this.id = id || uuidv4();
        this.timestamp = timestamp || Date.now();
    }
}