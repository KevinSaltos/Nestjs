import { BaseCursoDto } from "./base-Curso.dto";
import {PartialType} from '@nestjs/swagger';


export class UpdateCursoDto extends PartialType(BaseCursoDto){
    
    

}