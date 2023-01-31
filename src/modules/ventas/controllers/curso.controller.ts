import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
  import { ApiOperation, ApiTags } from '@nestjs/swagger';
  import { CreateCursoDto, FilterCursoDto, UpdateCursoDto } from '@uic/dto';
  import { CursoEntity } from '@uic/entities';
  import { ResponseHttpModel } from '@shared/models';
  import { CursoService } from '@uic/services';

  
  @ApiTags('Cursos')
  @Controller('Cursos')
  export class CursosController {
    constructor(private CursoService: CursoService) {}
  
    @ApiOperation({ summary: 'Create One' })
    //@Auth()
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: CreateCursoDto): Promise<ResponseHttpModel> {
      const serviceResponse = await this.CursoService.create(payload);
  
      return {
        data: serviceResponse.data,
        message: 'Curso created',
        title: 'Created',
      };
    }
  
    @ApiOperation({ summary: 'Catalogue' })
    @Get('catalogue')
    @HttpCode(HttpStatus.OK)
    async catalogue(): Promise<ResponseHttpModel> {
      const serviceResponse = await this.CursoService.catalogue();
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: catalogue,
        title: Catalogue,
      };
    }
  
 
  
    @ApiOperation({ summary: 'Find All' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: FilterCursoDto): Promise<ResponseHttpModel> {
      const serviceResponse = await this.CursoService.findAll(params);
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: index,
        title: 'Success',
      };
    }
  
    @ApiOperation({ summary: 'Find One' })
    //@Auth()
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.CursoService.findOne(id);
  
      return {
        data: serviceResponse.data,
        message: show ${id},
        title: Success,
      };
    }
  
    @ApiOperation({ summary: 'Update One' })
   // @Auth()
    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() payload: UpdateCursoDto,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.CursoService.update(id, payload);
  
      return {
        data: serviceResponse.data,
        message: Curso updated ${id},
        title: Updated,
      };
    }
  
    @ApiOperation({ summary: 'Remove One' })
    //@Auth()
    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.CursoService.remove(id);
  
      return {
        data: serviceResponse.data,
        message: Curso deleted ${id},
        title: Deleted,
      };
    }
  
    @ApiOperation({ summary: 'Remove All' })
    //@Auth()
    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: CursoEntity[]): Promise<ResponseHttpModel> {
      const serviceResponse = await this.CursoService.removeAll(payload);
  
      return {
        data: serviceResponse.data,
        message: Cursos deleted,
        title: Deleted,
      };
    }
  }