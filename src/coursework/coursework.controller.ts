import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('coursework')
export class CourseworkController {
    
    @Get()
    findAll(): string{
        return 'all courses'
    }

    @Get(':id')
    findOne(@Param('id') id: string): string{
        return `specific course ${id}`
    }

    @Post()
    create(): string{
        return 'create course'
    }
}
