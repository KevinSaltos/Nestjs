import { IsNumber, IsOptional, IsString } from 'class-validator';
import {PaginationDto} from 'core/dto';
import {
    isBooleanValidationOptions,
    isNotEmptyValidationOptions,
    isNumberValidationOptions,
    isStringValidationOptions,
    IsArrayValidationOptions,
    isPositiveValidationOptions,
    IsIntValidationOptions
  } from '@shared/validation';

import { title } from 'process';

export class FilterCursoDto extends PaginationDto{
@IsOptional()
@IsString(isStringValidationOptions())
readonly title:string;
@IsOptional()
@IsNumber(isNumberValidationOptions())
readonly TematicaId:number;




@IsOptional()
@IsString({message:'el campo nomnbre debe ser string'})
    limit: number;
    page: number;


}


