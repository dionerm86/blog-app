import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    title: string;
    
    @Column({length: 500})
    subTitle: string;
    
    @Column('text')
    imgUrl: string;

    @Column('text')
    content: string;
}