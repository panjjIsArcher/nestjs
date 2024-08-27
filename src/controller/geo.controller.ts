import { Controller, Get, Param, Post } from '@nestjs/common';
import { Geo } from 'src/entity/geo.entity';
import { GeoService } from 'src/service/geo.service';
import { apiResponse } from 'src/service/response.service';
import { Response as ApiResponse } from 'src/interfaces/response.interface';
@Controller('geo')
export class GeoController {
  constructor(private GeoService: GeoService) {}

  @Get('homeGeo')
  async getHomeGeo() {
    // 获取主页面的4个geo
    const homeGeo = await this.GeoService.getHomeGeo();
    return apiResponse(homeGeo, 'success!', 200);
  }

  @Get('')
  async findGeo(): Promise<ApiResponse<Geo[]>> {
    const geo = await this.GeoService.findGeo();
    return apiResponse(geo, 'success', 200);
  }

  @Get(':id')
  async findOne(@Param() param): Promise<ApiResponse<Geo>> {
    const geo = await this.GeoService.findOne(param.id);
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
}
