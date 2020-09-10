import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('job')
export class JobController {

  @Get(':id')
  findAll(): string {
    return 'FindAll';
  }

  @Post()
  create(): string {
    return 'Create';
  }

  @Put(':id')
  update(): string {
    return 'Update';
  }

  @Delete(':id')
  remove(): string {
    return 'Remove';
  }
}
