import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { take } from 'rxjs/operators';



@Injectable()
export class JokeService {

  private lastJokeIdx;
  currentJoke: BehaviorSubject<object> = new BehaviorSubject<object>(null);

  constructor(
    private afs: AngularFirestore,
    private localStorage: LocalStorageService
  ) {

    this.lastJokeIdx = this.localStorage.getLastJokeId();
    this.queryAndDiscard(this.lastJokeIdx);
  }

  queryAndDiscard(idx) {
    this.afs.collection('jokes', ref => ref.orderBy('id', 'asc').startAt(idx).endAt(idx+1).limit(1)).valueChanges().pipe(take(1)).subscribe(
      v => {
        if(v[0]) {
          this.currentJoke.next(v[0]);
        }
      }
    );

  }

  nextJoke() {
    this.lastJokeIdx = this.lastJokeIdx + 1;
    this.queryAndDiscard(this.lastJokeIdx);
    this.localStorage.saveLastJokeId(`${this.lastJokeIdx}`);
  }
}