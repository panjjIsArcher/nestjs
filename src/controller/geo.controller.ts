import { Controller, Get, Post } from '@nestjs/common';
import { Geo } from 'src/entity/geo.entity';
import { GeoService } from 'src/service/geo.service';
import { apiResponse } from 'src/service/response.service';
import { Response as ApiResponse } from 'src/interfaces/response.interface';
@Controller('geo')
export class GeoController {
  constructor(private GeoService: GeoService) {}

  @Get('')
  async findGeoTypes(): Promise<ApiResponse<Geo[]>> {
    await this.saveGeo({ name: 'box-top-right', typeId: 2 });
    const geo = await this.GeoService.findGeoTypes();
    return apiResponse(geo, 'success', 200);
  }

  @Post('/update')
  async updateGeo(geo): Promise<ApiResponse<boolean>> {
    await this.GeoService.updateGeo(geo);
    return apiResponse(true, 'success', 200);
  }

  @Post('/save')
  async saveGeo(geo) {
    await this.GeoService.saveGeo(geo);
  }

  @Get('/homeGeo')
  async getHomeGeo() {}
}
