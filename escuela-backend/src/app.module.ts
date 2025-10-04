import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnoModule } from './alumno/alumno.module';
import { DocenteModule } from './docente/docente.module';
import { CursoModule } from './curso/curso.module';
import { InscripcionModule } from './inscripcion/inscripcion.module';

@Module({
  imports: [AlumnoModule, DocenteModule, CursoModule, InscripcionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
