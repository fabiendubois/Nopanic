import { Injectable } from '@nestjs/common';
import { EnvironmentRepository } from './environment.repository';

@Injectable()
export class EnvironmentService {

    constructor(private readonly environmentRepository: EnvironmentRepository) { }

    async getAll(): Promise<string[]> {
        let environnements = await this.environmentRepository.getAll();
        environnements.sort();

        return environnements
    }
}
