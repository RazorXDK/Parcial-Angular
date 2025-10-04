import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AlumnoService, Alumno } from './alumno.service';

@Controller('alumno')
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) {}

  @Get()
  getAll(): Alumno[] {
    return this.alumnoService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Alumno {
    return this.alumnoService.findOne(+id);
  }

  @Post()
  create(@Body() data: Omit<Alumno, 'id'>): Alumno {
    return this.alumnoService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Omit<Alumno, 'id'>>): Alumno {
    return this.alumnoService.update(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    return this.alumnoService.remove(+id);
  }
}
