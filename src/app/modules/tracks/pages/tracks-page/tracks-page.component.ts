import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy{
  tracksTending: Array <TrackModel> = [];
  tracksRandom: Array <TrackModel> = [];

  listObserver: Array<Subscription> = [];

  constructor(private tracksServices: TrackService) { }

  ngOnInit(): void {
    const observer1$ = this.tracksServices.dataTracksTending$.subscribe(respuesta =>{
      this.tracksTending = respuesta;
    });

    const observer2$ = this.tracksServices.dataTracksRandom$.subscribe(respuesta =>{
      this.tracksRandom = [... this.tracksRandom, ... respuesta];
    });

    this.listObserver = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObserver.forEach(observe => observe.unsubscribe());
  }

}
