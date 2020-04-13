import { Injectable } from '@nestjs/common';
import { DataMapper } from '@aws/dynamodb-data-mapper';
import DynamoDB = require('aws-sdk/clients/dynamodb');
import { DeploymentEntity } from './models/deployment.model.entity';

@Injectable()
export class ApplicationRepository {

    private mapper: DataMapper;

    constructor() {
        this.mapper = new DataMapper({
            client: new DynamoDB({ region: 'eu-west-1' })
        });
    }

    public async getAll(): Promise<string[]> {
        let result = [];

        try {
            const query = {};
            for await (const item of this.mapper.scan(DeploymentEntity, query)) {
                if (!result.includes(item.application)) {
                    result.push(item.application);
                }
            }
        } catch (error) {
            console.error(error);
        }

        return result;
    }
}

