import { Controller, Get } from '@nestjs/common';
import { GeoService } from 'src/service/geo.service';

@Controller('geo')
export class GeoController {
  constructor(private GeoService: GeoService) {}

  @Get('')
  async findGeoTypes() {
    return await this.GeoService.findGeoTypes();
  }
}
