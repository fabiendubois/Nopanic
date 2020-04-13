import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateDeploymentDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly application: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly environment: string;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    readonly status: boolean;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly version: string;

    @ApiProperty()
    readonly metedata: any;
}