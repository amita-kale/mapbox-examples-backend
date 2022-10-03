import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MapboxEntity } from 'src/model/mapbox.entity';
import { MapboxController } from './mapbox.controller';
import { MapboxService } from './mapbox.service';

@Module({
  imports: [TypeOrmModule.forFeature([MapboxEntity])],
  controllers: [MapboxController],
  providers: [MapboxService],
})
export class MapboxModule {}
