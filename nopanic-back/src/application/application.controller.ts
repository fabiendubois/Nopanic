import { Controller, Get } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('applications')
@Controller('applications')
export class ApplicationController {

    constructor(private readonly applicationService: ApplicationService) { }

    @Get()
    @ApiOperation({ summary: 'Get all applications' })
    @ApiResponse({
        status: 200,
        description: 'Get all applications',
        type: String,
        isArray: true
    })
    async findAll(): Promise<string[]> {
        return await this.applicationService.getAll();
    }
}
