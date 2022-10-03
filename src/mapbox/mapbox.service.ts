import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { MapboxEntity } from 'src/model/mapbox.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class MapboxService {
  constructor(
    @InjectRepository(MapboxEntity)
    private readonly mapboxRepository: Repository<MapboxEntity>,
  ) {}

  findAllMapboxData(): Observable<MapboxEntity[]> {
    return from(this.mapboxRepository.find());
  }

  createGeoJSON(mapboxEntity: MapboxEntity): Observable<MapboxEntity> {
    return from(this.mapboxRepository.save(mapboxEntity));
  }

  deletePost(id: string): Observable<DeleteResult> {
    return from(this.mapboxRepository.delete(id));
  }
}
