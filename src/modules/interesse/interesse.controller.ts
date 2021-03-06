import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Interesse } from '../../database/entities/interesse.entity';
import {
  CreateInteresseDto,
  InteresseDto,
  UpdateInteresseDto,
} from './dto';
import { ApiUseTags } from '@nestjs/swagger';
import { InteresseService } from './interesse.service';

@Crud({
  model: {
    type: InteresseDto,
  },
  query: {
    join: {
      usuario: {
        exclude: ['senha', 'nome', 'grupoAcesso'],
        eager: true,
      },
    },
  },
  dto: {
    create: CreateInteresseDto,
    update: UpdateInteresseDto,
  },
  routes: {
    exclude: ['createManyBase', 'replaceOneBase'],
  },
})
@ApiUseTags('Interesses')
@Controller('interesses')
export class InteresseController implements CrudController<Interesse> {
  constructor(public service: InteresseService) {}

  get base(): CrudController<Interesse> {
    return this;
  }
}
