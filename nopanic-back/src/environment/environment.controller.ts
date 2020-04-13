import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { EnvironmentService } from './environment.service';

@ApiTags('environments')
@Controller('environments')
export class EnvironmentController {

    constructor(private readonly environmentService: EnvironmentService) { }

    @Get()
    @ApiOperation({ summary: 'Get all environments' })
    @ApiResponse({
        status: 200,
        description: 'Get all environments',
        type: String,
        isArray: true
    })
    async findAll(): Promise<string[]> {
        return await this.environmentService.getAll();
    }

}
