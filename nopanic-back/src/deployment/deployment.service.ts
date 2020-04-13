import { Injectable } from '@nestjs/common';
import { CreateDeploymentDto } from './dto/create-deployment.dto';
import { Deployment } from './models/deployment.model';
import { DeploymentRepository } from './deployment.repository';

@Injectable()
export class DeploymentService {

    constructor(private readonly deploymentRepository: DeploymentRepository) { }

    async create(createDeploymentDto: CreateDeploymentDto) {
        let deployment = new Deployment(createDeploymentDto.application, createDeploymentDto.environment, createDeploymentDto.status, createDeploymentDto.version, createDeploymentDto.metedata)
        await this.deploymentRepository.create(deployment);
    }

    async getAll(application?: string, environment?: string, limit?: number): Promise<Deployment[]> {
        let _deployments: Deployment[] = [];
        _deployments = await this.deploymentRepository.getAll(application, environment, limit);
        _deployments.sort(function(x, y){
            return y.timestamp - x.timestamp;
        })
        return _deployments;
    }
}
