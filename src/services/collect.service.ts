import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Collect } from '../entity/collect.entity';

@Injectable()
export class CollectService {
    constructor(
        @InjectRepository(Collect)
        private readonly collectRepository: Repository<Collect>,
    ) {}

    public async create(createData: any): Promise<Collect[]> {
        return await this.collectRepository.save(createData);
    }

    public async remove(id: string): Promise<any> {
        return await this.collectRepository.delete(id);
    }

    public async findAll(): Promise<Collect[]> {
        return await this.collectRepository.find();
    }

    public async findById(id: number): Promise<Collect[]> {
        return await this.collectRepository.find({ id });
    }

    public async findByIds(ids: number[]): Promise<Collect[]> {
        return await this.collectRepository.findByIds(ids);
    }

    public async updateById(body: { id: number; collectName: string }): Promise<Collect[]> {
        const collect = await this.findById(body.id);
        return await this.collectRepository.save({ ...collect, ...body });
    }
}
