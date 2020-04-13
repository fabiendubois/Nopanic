import {
    attribute,
    hashKey,
    table,
    rangeKey,

} from '@aws/dynamodb-data-mapper-annotations';
import { Deployment } from './deployment.model';

@table('Deployments')
export class DeploymentEntity implements Deployment {

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