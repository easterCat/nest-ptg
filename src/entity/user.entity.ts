import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectEntity } from './project.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ length: 40 })
    public account: string;

    @Column({ length: 100 })
    public avatarUrl: string;

    @Column({ length: 100, charset: 'utf8mb4' })
    public name: string;

    @Column({ length: 40 })
    public role: string;

    @Column('int', { name: 'createdAt' })
    public createdAt: number;

    @Column('int', { name: 'updatedAt' })
    public updatedAt: number;

    @Column({ length: 250 })
    public password: string;

    // @OneToMany(
    //     (type) => ProjectEntity,
    //     (project) => project.user,
    // )
    // public posts: ProjectEntity[];
}
