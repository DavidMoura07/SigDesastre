import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { FonteDto } from '../../fonte/dto';
import { GrupoAcessoDto } from '../../grupoAcesso/dto';
import {
  IsArray,
  IsDefined,
  IsString,
  IsInt,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { DescritorDto } from '../../descritor/dto';
import { MidiaDto } from '../../midia/dto';

export class UpdateNoticiaDto {
  @ApiModelProperty({
    description: 'Identificados da notícia.',
  })
  @IsDefined()
  @IsNotEmpty()
  @IsInt()
  id: number;

  @ApiModelPropertyOptional({
    description: 'Título da notícia',
  })
  @IsOptional()
  @IsString()
  titulo: string;

  @ApiModelPropertyOptional({
    description: 'Contúdo da notícia',
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  conteudo: string;

  @ApiModelPropertyOptional({
    description: 'URL da notícia.',
  })
  @IsOptional()
  @IsString()
  link: string;

  @ApiModelPropertyOptional({
    description: 'Descrição da notícia',
  })
  @IsOptional()
  @IsString()
  descricao: string;

  @ApiModelPropertyOptional({
    description: 'Data de publicação.',
    format: 'date-time',
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  dataPublicacao: string;

  @ApiModelPropertyOptional({
    description: 'Data de criação',
    format: 'date-time',
  })
  @IsOptional()
  @IsString()
  dataCriacao: string;

  @ApiModelPropertyOptional({
    description: 'Data de atualização',
    format: 'date-time',
  })
  @IsOptional()
  @IsString()
  dataAtualizacao: string;

  @ApiModelPropertyOptional({
    description: 'Fonte da notícia',
    type: () => FonteDto,
  })
  @IsOptional()
  @IsNotEmpty()
  fonte: FonteDto;

  @ApiModelPropertyOptional({
    description: 'Grupo de acesso',
    type: () => GrupoAcessoDto,
  })
  @IsOptional()
  @IsNotEmpty()
  grupoAcesso: GrupoAcessoDto;

  @ApiModelPropertyOptional({
    description: 'Mídias',
    type: () => MidiaDto,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  midias: MidiaDto[];

  @ApiModelPropertyOptional({
    description: 'Descritores',
    type: () => DescritorDto,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  descritores: DescritorDto[];
}
