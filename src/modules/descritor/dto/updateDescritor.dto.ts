import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';
import { AssuntoDto } from '../../assunto/dto/index';
import { NoticiaDto } from '../../noticiax/dto/index';
import { FonteDto } from '../../fonte/dto/index';
import { IsInt, IsDefined, IsString, IsArray } from 'class-validator';

export class UpdateDescritorDto {
  @ApiModelProperty({
    description: 'Identificador do descritor',
  })
  @IsInt()
  @IsDefined()
  id: number;

  @ApiModelPropertyOptional({
    description: 'Nome do descritor',
  })
  @IsString()
  nome: string ;

  @ApiModelPropertyOptional({
    description: 'Assuntos relacionados ao descritor.',
    type: AssuntoDto,
    isArray: true
  })
  @IsArray()
  assuntos: AssuntoDto[];

  @ApiModelPropertyOptional({
    description: 'Noticias relacionados ao descritor.',
    type: NoticiaDto,
    isArray: true
  })@IsArray()
  noticias: NoticiaDto[];

  @ApiModelPropertyOptional({
    description: 'Fontes relacionadas ao descritor.',
    type: FonteDto,
    isArray: true
  })
  @IsArray()
  fontes: FonteDto[];
}
