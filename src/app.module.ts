import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleController } from './example/example.controller';
import { ExampleService } from './example/example.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController, ExampleController],
  providers: [AppService, ExampleService],
})
export class AppModule {}
