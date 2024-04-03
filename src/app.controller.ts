import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health Check')
@Controller('health-check')
export class AppController {
  constructor() {}

  @Get()
  get(): string {
    return 'App Running on port 3000';
  }
}
