import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GeoService } from 'src/service/geo.service';
import { GeoController } from 'src/controller/geo.controller';
import { GeoType } from 'src/entity/geoType.entity';
@Module({
  imports: [TypeOrmModule.forFeature([GeoType])],
  providers: [GeoService],
  controllers: [GeoController],
})
export class GeoTypeModule {}
