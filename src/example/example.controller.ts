import { Controller, Get } from '@nestjs/common';

//Defining a simple GET route to return a JSON response
@Controller('example')
export class ExampleController {
  @Get()
  getExample(): string {
    return 'Hello, NestJS!';
  }
}
