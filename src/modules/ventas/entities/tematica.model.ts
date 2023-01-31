import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CursoEntity } from "./curso.model";

@Entity('Tematica',{schema:'ventabdd'})
export class TematicaEntity{
    @PrimaryGeneratedColumn('identity')
    id:string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;

    @UpdateDateColumn({
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'create_at',
        type:'timestamptz',
        nullable:true,
    })
    deleteAt:Date;

    @OneToMany(() => CursoEntity, (Curso) => Curso.Tematica)
    @JoinColumn({name:'Curso_id'})
    Curso: CursoEntity;
    
    @Column('varchar',{
        name:'name',
        comment: 'nombre de la tematica',
    })
    
    name:string;
    
    @Column('varchar',{
        name:'description',
        comment:'descripcion de la tematica'
    })
    
    description:string;
}
