import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { MidiaDto } from '../../midia/dto/index';
import { IsOptional } from 'class-validator';

export class TipoMidiaDto {
  @ApiModelProperty({
    description: 'Identificador do Tipo Mídia',
  })
  id: number;

  @ApiModelProperty({
    description: 'Nome do Tipo Mídia',
  })
  nome: string;

  @ApiModelPropertyOptional({
    description: 'Mídias relacionadas ao Tipo Mídia',
    type: MidiaDto,
    isArray: true,
  })
  @IsOptional()
  midias: MidiaDto[];
}
