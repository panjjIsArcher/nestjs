import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Geo } from 'src/entity/geo.entity';
import { GeoService } from 'src/service/geo.service';
import { GeoController } from 'src/controller/geo.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Geo])],
  providers: [GeoService],
  controllers: [GeoController],
})
export class GeoModule {}
