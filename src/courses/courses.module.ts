import { Module } from '@nestjs/common';
import { PushModule } from 'src/push/push.module';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { CoursesController } from './courses.controller';
import { CoursesEventsListener } from './listeners/courses.event';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from 'src/config/config';
import { ContractsModule } from 'src/contracts/contracts.module';

@Module({
  imports: [
    ConfigModule.forFeature(databaseConfig),
    TypeOrmModule.forFeature([Course]),
    PushModule,
    ContractsModule,
  ],
  controllers: [CoursesController],
  providers: [CoursesService, CoursesEventsListener],
  exports: [CoursesService],
})
export class CoursesModule {}
