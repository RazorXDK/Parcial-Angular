import { Injectable, NotFoundException } from '@nestjs/common';

export interface Alumno {
  id: number;
  nombre: string;
  edad: number;
}

@Injectable()
export class AlumnoService {
  private alumnos: Alumno[] = [];
  private idCounter = 1;

  findAll(): Alumno[] {
    return this.alumnos;
  }

  findOne(id: number): Alumno {
    const alumno = this.alumnos.find(a => a.id === id);
    if (!alumno) {
      throw new NotFoundException(`Alumno con id ${id} no encontrado`);
    }
    return alumno;
  }

  create(data: Omit<Alumno, 'id'>): Alumno {
    const nuevo: Alumno = { id: this.idCounter++, ...data };
    this.alumnos.push(nuevo);
    return nuevo;
  }

  update(id: number, data: Partial<Omit<Alumno, 'id'>>): Alumno {
    const alumno = this.findOne(id); // 👈 ya lanza NotFoundException si no existe
    Object.assign(alumno, data);
    return alumno;
  }

  remove(id: number): boolean {
    const index = this.alumnos.findIndex(a => a.id === id);
    if (index === -1) {
      throw new NotFoundException(`Alumno con id ${id} no encontrado`);
    }
    this.alumnos.splice(index, 1);
    return true;
  }
}
