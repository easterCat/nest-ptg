import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectEntity } from './project.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'user' })
export class UserEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id: number;

    @ApiProperty()
    @Column({ length: 40 })
    public account: string;

    @ApiProperty()
    @Column({ length: 100 })
    public avatarUrl: string;

    @ApiProperty()
    @Column({ length: 40 })
    public name: string;

    @ApiProperty()
    @Column({ length: 40 })
    public role: string;

    @ApiProperty()
    @Column('int', { name: 'createdAt' })
    public createdAt: number;

    @ApiProperty()
    @Column('int', { name: 'updatedAt' })
    public updatedAt: number;

    @ApiProperty()
    @Column({ length: 250 })
    public password: string;

    @OneToMany(
        (type) => ProjectEntity,
        (project) => project.user,
    )
    public posts: ProjectEntity[];
}
