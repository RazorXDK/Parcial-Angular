import { Controller } from '@nestjs/common';
import { DocenteService } from './docente.service';

@Controller('docente')
export class DocenteController {
  constructor(private readonly docenteService: DocenteService) {}
}
