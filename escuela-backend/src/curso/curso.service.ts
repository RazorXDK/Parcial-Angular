
import { Injectable, NotFoundException } from '@nestjs/common';

export interface Curso {
  id: number;
  nombre: string;
  duracion: number;
}

@Injectable()
export class CursoService {
  private cursos: Curso[] = [];
  private idCounter = 1;

  findAll(): Curso[] {
    return this.cursos;
  }

  findOne(id: number): Curso {
    const curso = this.cursos.find(c => c.id === id);
    if (!curso) {
      throw new NotFoundException(`Curso con id ${id} no encontrado`);
    }
    return curso;
  }

  create(data: Omit<Curso, 'id'>): Curso {
    const nuevo: Curso = { id: this.idCounter++, ...data };
    this.cursos.push(nuevo);
    return nuevo;
  }

  update(id: number, data: Partial<Omit<Curso, 'id'>>): Curso {
    const curso = this.findOne(id);
    Object.assign(curso, data);
    return curso;
  }

  remove(id: number): boolean {
    const index = this.cursos.findIndex(c => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Curso con id ${id} no encontrado`);
    }
    this.cursos.splice(index, 1);
    return true;
  }
}
