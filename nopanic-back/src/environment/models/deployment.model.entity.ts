import {
    attribute,
    hashKey,
    table,
    rangeKey,

} from '@aws/dynamodb-data-mapper-annotations';

@table('Deployments')
export class DeploymentEntity{

    @hashKey()
    id: string;

    @rangeKey()
    timestamp: number;

    @attribute()
    application: string;

    @attribute()
    environment: string;

    @attribute()
    status: boolean;

    @attribute()
    version: string;

    @attribute()
    metedata: any;
}