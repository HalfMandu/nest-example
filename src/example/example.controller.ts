import { Controller, Get } from '@nestjs/common';
import { ExampleService } from './example.service';

//Defining a simple GET route to return a JSON response
@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  getExample(): string {
    return this.exampleService.getHello();
  }
}
