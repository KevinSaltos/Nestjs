import { IsInt, IsPositive } from "class-validator";
import { BaseCursoDto } from "./base-curso.dto";
import {
    isBooleanValidationOptions,
    isNotEmptyValidationOptions,
    isNumberValidationOptions,
    isStringValidationOptions,
    IsArrayValidationOptions,
    isPositiveValidationOptions,
    IsIntValidationOptions

  } from '@shared/validation';

export class CreateCursoDto extends BaseCursoDto{

    

    

}