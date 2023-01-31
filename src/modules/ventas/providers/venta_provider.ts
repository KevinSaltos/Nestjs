import { TematicaEntity } from '../entities/tematica.model';
import { CursoEntity } from '../entities/curso.model';
import { DataSource } from 'typeorm';

export ventaProviders = [
    {
        provide: RepositoryEnum.CURSO_REPOSITORY,
        userFactory: (dataSource: DataSource) =>
            dataSource.getRepository(CursoEntity),
        inject: [DataSourceEnum.PG_DATA_SOURCE]
    },
    {
        provide: RepositoryEnum.TEMATICA_REPOSITORY,
        userFactory: (dataSource: DataSource) =>
            dataSource.getRepository(TematicaEntity),
        inject: [DataSourceEnum.PG_DATA_SOURCE]
    }
]

//KS