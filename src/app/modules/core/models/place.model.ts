import { Location } from '@modules/core/models/location.model';

export interface Place {
  name: string;
  location: Location;
  place_id: string;
  utc_offset: number;
}
