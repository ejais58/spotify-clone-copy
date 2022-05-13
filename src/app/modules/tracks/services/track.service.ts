import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  
  dataTracksTending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<any> = of([]);

  
  constructor() {
    const {data}:any = (dataRaw as any).default;
    
    this.dataTracksTending$ = of(data); 

    this.dataTracksRandom$ = new Observable((observe) =>{

      const trackExample : TrackModel = {
        _id: 9,
        name: 'leve',
        album: 'Cartel de Santa',
        url: 'http://',
        cover: 'https://i.scdn.co/image/ab67616d0000b2731c30988545dcde2ee3e1ed17'
      }

      setTimeout(() =>{
        observe.next([trackExample]);
      },3500);
    });
   }
}
