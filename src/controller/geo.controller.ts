import { Controller, Get } from '@nestjs/common';
import { GeoService } from 'src/service/geo.service';

@Controller('geo')
export class GeoController {
  constructor(private GeoService: GeoService) {}

  @Get('/geoType')
  async findGeoTypes() {
    return await this.GeoService.findGeoTypes();
  }
}
