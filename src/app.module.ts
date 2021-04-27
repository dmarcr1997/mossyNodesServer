import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsController } from './projects/projects.controller';
import { CourseworkController } from './coursework/coursework.controller';
import { AdminController } from './admin/admin.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://CPdb/nest')],
  controllers: [AppController, ProjectsController, CourseworkController, AdminController],
  providers: [AppService],
})
export class AppModule {}
