import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { GeoJSON } from 'geojson';
@Entity('mapboxEntity')
export class MapboxEntity {
  @PrimaryGeneratedColumn('uuid')
  Id: string;
  @Column()
  Name: string;
  //   @Column()
  //   Description: string;
  @Column()
  Property: string;

  @Index({ spatial: true })
  @Column({
    type: 'geometry',
    spatialFeatureType: 'geometry',
    srid: 4326,
    nullable: true,
  })
  geom: GeoJSON;
}
