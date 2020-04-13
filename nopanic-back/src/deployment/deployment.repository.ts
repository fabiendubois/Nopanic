import { Injectable } from '@nestjs/common';
import { DataMapper } from '@aws/dynamodb-data-mapper';
import DynamoDB = require('aws-sdk/clients/dynamodb');
import { DeploymentEntity } from './models/deployment.model.entity';
import { Deployment } from './models/deployment.model';

import {
    AttributePath,
    FunctionExpression,
    UpdateExpression,
    ConditionExpression,
    ConditionExpressionPredicate,
    equals
} from '@aws/dynamodb-expressions';

@Injectable()
export class DeploymentRepository {

    private mapper: DataMapper;

    constructor() {
        this.mapper = new DataMapper({
            client: new DynamoDB({ region: 'eu-west-1' })
        });
    }

    public async create(deployment: Deployment) {
        const toSave = Object.assign(new DeploymentEntity, deployment);
        await this.mapper.put(toSave).then().catch(err => {
            console.log(err);
        });
    }

    public async getAll(application?: string, environment?: string, limit?: number) {
        let result = [];

        if (application && limit) {
            let equalsExpressionPredicate = equals(application);

            for await (const item of this.mapper.scan(DeploymentEntity, {
                limit: limit,
                filter: {
                    ...equalsExpressionPredicate,
                    subject: 'application'
                }
            })) {
                result.push(item);
            }
        } else if (application) {
            let query = { application: application };
            const index = { indexName: 'ApplicationIndex' };

            for await (const item of this.mapper.query(DeploymentEntity, query, index)) {
                result.push(item);
            }
        } else if (environment) {
            let equalsExpressionPredicate = equals(environment);

            for await (const item of this.mapper.scan(DeploymentEntity, {
                limit: limit,
                filter: {
                    ...equalsExpressionPredicate,
                    subject: 'environment'
                }
            })) {
                result.push(item);
            }

        } else {
            for await (const item of this.mapper.scan(DeploymentEntity)) {
                result.push(item);
            }
        }

        return result;
    }
}

