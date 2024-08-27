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

  async findGeoTypes() {
    this.geoRepository.find();
  }
}
