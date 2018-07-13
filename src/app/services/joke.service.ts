import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';


@Injectable()
export class JokeService {

  readonly localJokes: object[] = [ {
    joke: 'Sino sa sp ang laging may baril?',
    buttonText: 'sino?',
    answer: 'Edi si bry! Chung! Chung! Chung!'
  }];

  readonly jokes: BehaviorSubject<object[]> = new BehaviorSubject<object[]>(this.localJokes);
  
}