import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursoService } from './modules/ventas/services/cursos/cursos.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CursoService],
})
export class AppModule {}
