import { Controller, Get } from '@nestjs/common';
import { Geo } from 'src/entity/geo.entity';
import { GeoService } from 'src/service/geo.service';

@Controller('geo')
export class GeoController {
  constructor(private GeoService: GeoService) {}

  @Get('')
  async findGeoTypes(): Promise<Geo[]> {
    return await this.GeoService.findGeoTypes();
  }
}
