import { Column, Entity, Index, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { TipoFonte } from './tipoFonte.entity';

@Index('rss_pkey', ['id'], { unique: true })
@Entity('rss', { schema: 'public' })
export class RSS {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nome', length: 240 })
  nome: string;

  @Column('character varying', { name: 'url', length: 240 })
  url: string;

  // @Column({ type: 'integer', name: 'tipoFonteId' })
  // tipoFonteId: number;

  @ManyToOne(() => TipoFonte, tipoFonte => tipoFonte.rss, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'tipoFonteId' })
  tipoFonte: TipoFonte;
}
