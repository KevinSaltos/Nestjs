

import { Global, Module } from '@nestjs/common';
@Global()
@Module({
    imports: [DatabaseModule],
    controllers: [
        CursoController,
        TematicaController
    ],
    providers: [
        ...ventaProviders,
        CursoService,
        TematicaService,
        
    ],
    exports:[],
})
export class VentaModule {}
