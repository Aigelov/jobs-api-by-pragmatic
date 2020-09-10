import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobModule } from './job/job.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost:27017/job'
    ),
    JobModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
