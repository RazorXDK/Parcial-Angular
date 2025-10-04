import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CursoService,Curso } from './curso.service';

@Controller('curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Get('/cursos')
  async findAll() {
    return this.cursoService.findAll();
  }

  @Get('/cursos/:id')
  async findOne(@Param('id') id: string) {
    return this.cursoService.findOne(+id);
  }

  @Post('/cursos')
  async create(@Body() data: Omit<Curso, 'id'>) {
    return this.cursoService.create(data);
  }

  @Put('/cursos/:id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Omit<Curso, 'id'>>
  ) {
    return this.cursoService.update(+id, data);
  }

  @Delete('/cursos/:id')
  async remove(@Param('id') id: string) {
    return this.cursoService.remove(+id);
  }
}
