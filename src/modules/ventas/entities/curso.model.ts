import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TematicaEntity } from "./tematica.model";

@Entity('Cursos',{schema:'ventabdd'})

export class CursoEntity{
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
    @ManyToOne(() => TematicaEntity, (Tematica) => Tematica.Curso)
    @JoinColumn({name:'Curso_id'})
    Tematica: TematicaEntity;

    @Column('varchar',{
        name:'title',
        unique:true,
        comment: 'nombre del Curso',
    })
    title:string;

    @Column('number',{
        name:'price',
        comment:'precio del  Curso',
    })
    
    price:number;
    
    @Column('varchar',{
        name:'description',
        comment:'descripcion del Curso'
    })
    description:string;
