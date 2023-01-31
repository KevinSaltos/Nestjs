import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RepositoryEnum } from 'src/shared/enums/repository.enum';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { response } from 'express';
import { CreateCursoDto, ReadCursoDto, FilterCursoDto, UpdateCursoDto } from '../../dto';
import { CursoEntity } from '../../entities/curso.model';
import { PaginationDto } from '../../dto/pagination/pagination.dto';

@Injectable()
export class CursoService {
    [x: string]: any;
  constructor(
    @Inject(RepositoryEnum.CURSO_REPOSITORY)
    private repository: Repository<CursoEntity>,
  ) {}
  async create(payload: CreateCursoDto): Promise<ServiceResponseHttpModel> {
    const newCurso = this.repository.create(payload);
    const CursoCreated = this.repository.save(newCurso); 
    return { data: plainToInstance(ReadCursoDto, CursoCreated) }; 
  }

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const newEvent = this.repository.findAndCount({ take: 1000 });
    return {
      data: this.response[0],
      pagination: { totaItems: response[1], limit: 10 },
    };
  }

  async findAll(params?: FilterCursoDto): Promise<ServiceResponseHttpModel> {
    if (params?.limit > 0 && params?.page >= 0)
      return await this.paginateAndFilter(params);
    const response = await this.repository.findAndCount({
      order: {
        updateAt: 'DESC',
      },
    });
    return {
      data: plainToInstance(ReadCursoDto, response[0]),
      pagination: { totalItems: response[1], limit: 10 },
    };
  }

  async findOne(id: string): Promise<ServiceResponseHttpModel> {
    const Curso = await this.repository.findOneBy({ id });

    if (!Curso) {
      throw new NotFoundException('Project not found');
    }
    return { data: plainToInstance(ReadCursoDto, Curso) };
  }
//KS
  async update(
    id: string,
    payload: UpdateCursoDto,
): Promise<ServiceResponseHttpModel> {
    const Curso = await this.repository.preload({ id, ...payload });

    if (!Curso) {
        throw new NotFoundException("Curso not found");
    }
    const CursoUpdated = await this.repository.save(Curso);

    return { data: plainToInstance(ReadCursoDto, CursoUpdated) };
}

async remove(id: string): Promise<ServiceResponseHttpModel> {
    const Curso = await this.repository.findOneBy({ id });

    if (!Curso) {
        throw new NotFoundException("Curso not found");
    }
    const CursoDelete = await this.repository.softRemove(Curso);

    return { data: plainToInstance(ReadCursoDto, CursoDelete) };
}
async removeAll(payload: CursoEntity[]): Promise<ServiceResponseHttpModel> {
    const CursosDeleted = await this.repository.softRemove(payload);
    return { data: CursosDeleted };
}
private async paginateAndFilter(
    params: FilterCursoDto
): Promise<ServiceResponseHttpModel> {
    let where: FindOptionsWhere<CursoEntity> | FindOptionsWhere<CursoEntity>[];
    where = {};
    let { page, search } = params;
    const { limit } = params;

    if (search) {
        search = search.trim();
        page = 0;
        where = [];
        where.push({ title: ILike(%${search}%) });
    }

    const response = await this.repository.findAndCount({
        where,
        take: limit,
        skip: PaginationDto.getOffset(limit, page),
        order: {
            updatedAt: 'DESC'
        },

    });
    return {
        data: plainToInstance(ReadCursoDto, response[0]),
        pagination: { limit, totalItems: response[1] },
    }

}
async activateCurso(payload: CreateCursoDto): Promise<ServiceResponseHttpModel> {
    const newCurso = this.repository.create(payload);
    const CursoCreated = await this.repository.save(newCurso);

    return { data: plainToInstance(ReadCursoDto, CursoCreated) };
  }
  
  async closeCurso(id: string): Promise<ServiceResponseHttpModel> {
    const Curso = await this.repository.findOneBy({ id });

    if (!Curso) {
        throw new NotFoundException("Curso not found");
    }
    const CursoDelete = await this.repository.softRemove(Curso);

    return { data: plainToInstance(ReadCursoDto, CursoDelete) };
}
}