import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollectEntity } from '../entity/collect.entity';

@Injectable()
export class CollectService {
    constructor(
        @InjectRepository(CollectEntity)
        private readonly collectRepository: Repository<CollectEntity>,
    ) {}

    public async create(createData: any): Promise<CollectEntity[]> {
        return await this.collectRepository.save(createData);
    }

    public async remove(id: string): Promise<any> {
        return await this.collectRepository.delete(id);
    }

    public async findAll(): Promise<CollectEntity[]> {
        return await this.collectRepository.find();
    }

    public async findById(id: number): Promise<CollectEntity[]> {
        return await this.collectRepository.find({ id });
    }

    public async findByIds(ids: number[]): Promise<CollectEntity[]> {
        return await this.collectRepository.findByIds(ids);
    }

    public async updateById(updateData: { id: number; collectName: string }): Promise<any> {
        const result = await this.collectRepository.update(updateData.id, { collectName: updateData.collectName });
        if (result) {
            return await this.findById(updateData.id);
        } else {
            return null;
        }
    }

    public async deleteById(id: number): Promise<any> {
        const result = await this.findById(id);
        if (result) {
            await this.collectRepository.delete(id);
            return result;
        } else {
            throw new HttpException('该合集不存在,删除失败', 400);
        }
    }
}
