import { Controller, Get } from '@nestjs/common';
import { Geo } from 'src/entity/geo.entity';
import { GeoService } from 'src/service/geo.service';
import { apiResponse } from 'src/service/response.service';
import { Response as ApiResponse } from 'src/interfaces/response.interface';
@Controller('geo')
export class GeoController {
  constructor(private GeoService: GeoService) {}

  @Get('')
  async findGeoTypes(): Promise<ApiResponse<Geo[]>> {
    const geo = await this.GeoService.findGeoTypes();
    return apiResponse(geo, 'success', 200);
  }
}
