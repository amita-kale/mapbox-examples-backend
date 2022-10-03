import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MapboxEntity } from 'src/model/mapbox.entity';
import { DeleteResult } from 'typeorm';
import { MapboxService } from './mapbox.service';

@Controller('mapbox')
export class MapboxController {
  constructor(private readonly mapboxService: MapboxService) {}

  @Get() findAll(): Observable<MapboxEntity[]> {
    return this.mapboxService.findAllMapboxData();
  }

  @Post() create(@Body() mapboxEntity: MapboxEntity): Observable<MapboxEntity> {
    return this.mapboxService.createGeoJSON(mapboxEntity);
  }

  @Delete(':id') delete(@Param('id') id: string): Observable<DeleteResult> {
    return this.mapboxService.deletePost(id);
  }
}
