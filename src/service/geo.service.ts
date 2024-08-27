import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Geo } from 'src/entity/geo.entity';
import { GeoType } from 'src/entity/geoType.entity';
import { GeoRepository } from 'src/repository/geo.repository';
import { GeoTypeRepository } from 'src/repository/geoType.repository';

@Injectable()
export class GeoService {
  constructor(
    @InjectRepository(Geo)
    private geoRepository: GeoRepository,
    // @InjectRepository(GeoType)
    // private geoTypeRepository: GeoTypeRepository,
  ) {}

  async findGeoTypes() {
    // return await this.geoTypeRepository.find();
  }
}
