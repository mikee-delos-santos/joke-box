import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component( { 
  selector: 'joke-box',
  templateUrl: './joke-box.component.pug',
  styleUrls: ['./joke-box.component.css']
})
export class JokeBoxComponent {

  currentJoke: object = {};
  jokeState: string = 'no-joke'; // no-joke, show-joke, show-answer
  buttonTexts: string[] = ['give it to me', 'mooooooore!', '\'sa pa', 'one more time.', 'again again!', 'hahahahaha!!', 'petmalu'];
  buttonText: string;
  freshLoad: boolean = true;

  
  constructor(
    private jokeService: JokeService,
  ) {
    this.jokeService.currentJoke.subscribe( v => {
      if(v) {
        this.currentJoke = v;
      } else {
        this.currentJoke = {empty: true};
      }
    });

    this.buttonText = this.buttonTexts[0];
  }

  generateRand(min = 1, max = this.buttonTexts.length - 1) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  
  nextState() {
    if(this.jokeState === 'no-joke') {
      this.jokeState = 'show-joke';
    } else if(this.jokeState === 'show-joke') {
      this.jokeState = 'show-answer';
    } else {
      this.jokeService.nextJoke();
      this.jokeState = 'show-joke';
      this.buttonText = this.buttonTexts[this.generateRand()];
      this.currentJoke = {empty: true};
      this.freshLoad = false;
    } 
  }
}
