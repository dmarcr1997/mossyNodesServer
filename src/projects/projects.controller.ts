import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {

    @Get()
    findAll(): string{
        return 'all projects'
    }

    @Get(':id')
    findOne(@Param() params): string{
        return 'specific project'
    }

    @Post()
    create(): string{
        return 'create project'
    }
}
