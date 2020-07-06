import { Controller } from '@nestjs/common';
import {
  DescritorDto,
  CreateDescritorDto,
  UpdateDescritorDto,
} from './dto/index';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiUseTags } from '@nestjs/swagger';
import { Descritor } from '../../database/entities/descritor.entity';
import { DescritorService } from './descritor.service';

@Crud({
  model: {
    type: DescritorDto,
  },
  dto: {
    create: CreateDescritorDto,
    update: UpdateDescritorDto,
  },
})
@ApiUseTags('Descritor')
@Controller('descritor')
export class DescritorController implements CrudController<Descritor> {
  constructor(public service: DescritorService) {}

  get base(): CrudController<Descritor> {
    return this;
  }
}
