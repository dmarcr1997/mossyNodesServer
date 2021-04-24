import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsController } from './projects/projects.controller';
import { CourseworkController } from './coursework/coursework.controller';
import { AdminController } from './admin/admin.controller';

@Module({
  imports: [],
  controllers: [AppController, ProjectsController, CourseworkController, AdminController],
  providers: [AppService],
})
export class AppModule {}
