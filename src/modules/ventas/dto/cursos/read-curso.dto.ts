
import { Exclude, Expose } from 'class-transformer';
import { BaseCursoDto } from './base-Curso.dto';

@Exclude()
export class ReadCursoDto extends BaseCursoDto {
  @Expose()
  readonly title;

  @Expose()
  readonly description;

  @Expose()
  readonly price;

  @Expose()
  readonly TematicaId;

  @Expose()
  readonly images;

}