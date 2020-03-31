import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeaconService {

  beacons: any[] = [];

  constructor(
    private http: HttpClient
  ) { }


  getBeacons() {
    return this.http.get('');
  }
  newBeacon(beacon: any) {
    return this.http.post('', beacon);
  }
  delBeacon(id: number) {
    return this.http.delete(`${id}`);
  }
  putBeacon(beacon: any) {
    return this.http.put('', beacon);
  }
}
