import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Geo } from 'src/entity/geo.entity';
import { GeoRepository } from 'src/repository/geo.repository';

@Injectable()
export class GeoService {
  constructor(
    @InjectRepository(Geo)
    private geoRepository: GeoRepository,
  ) {}

  async findGeo(): Promise<Geo[]> {
    return this.geoRepository.find();
  }

  async findOne(id: number): Promise<Geo> {
    return this.geoRepository.findOne({ where: { id } });
  }

  async updateGeo(geo) {
    return await this.geoRepository.update(geo.id, geo);
  }

  async saveGeo(geo) {
    return await this.geoRepository.save(geo);
  }
  // 使用id多查
  async findByIds(ids: number[]): Promise<Geo[]> {
    return await this.geoRepository
      .createQueryBuilder('Geo')
      .where('Geo.id IN (:...ids)', { ids })
      .getMany();
  }

  async getHomeGeo() {
    const geoList = await this.findByIds([1, 2, 3, 4]);
    return geoList;
  }
}
