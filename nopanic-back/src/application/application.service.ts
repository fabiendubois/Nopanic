import { Injectable } from '@nestjs/common';
import { ApplicationRepository } from './application.repository';

@Injectable()
export class ApplicationService {

    constructor(private readonly applicationRepository: ApplicationRepository) { }

    async getAll(): Promise<string[]> {
        let applications = await this.applicationRepository.getAll();
        applications.sort();
        
        return applications
    }
}
