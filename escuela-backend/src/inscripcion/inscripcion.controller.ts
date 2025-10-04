import { Controller } from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';

@Controller('inscripcion')
export class InscripcionController {
  constructor(private readonly inscripcionService: InscripcionService) {}
}
