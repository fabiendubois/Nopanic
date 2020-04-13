import { Controller, Post, Body, Get, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { DeploymentService } from './deployment.service';
import { CreateDeploymentDto } from './dto/create-deployment.dto';
import { Deployment } from './models/deployment.model';
import { ApiTags, ApiResponse, ApiOperation, ApiNotFoundResponse, ApiBadRequestResponse, ApiQuery } from '@nestjs/swagger';

@ApiTags('deployments')
@Controller('deployments')
export class DeploymentController {

    constructor(private readonly deploymentService: DeploymentService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiOperation({ summary: 'Create deployment' })
    async create(@Body() createDeploymentDto: CreateDeploymentDto) {
        await this.deploymentService.create(createDeploymentDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all deployments' })
    @ApiResponse({
        status: 200,
        description: 'Get all deployments',
        type: Deployment,
        isArray: true
    })
    @ApiQuery({ name: 'application', description: 'application name', required: false })
    @ApiQuery({ name: 'environment', description: 'environment name', required: false })
    @ApiQuery({ name: 'limit', description: 'items limit', required: false })
    async findAll(@Query('application') application: string, @Query('environment') environment: string, @Query('limit') limit: number): Promise<Deployment[]> {

        console.log("CONTROLLER DEPLOYMENTS")

        return this.deploymentService.getAll(application, environment, limit);
    }
}
