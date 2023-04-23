import { Component, OnInit } from '@angular/core';
import { GameStateService } from 'src/app/services/game-state.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.less']
})
export class HangmanComponent implements OnInit {

  constructor(public gameState:GameStateService) { }

  ngOnInit(): void {
    this.play();

    this.gameState.mistake$.subscribe(()=>{
      this.play()
    })
  }

  numberOfIncorrectGuesses:number=1;
  letter:string=""

  play(){
    let audio = new Audio(`assets/sounds/${this.gameState.numberOfIncorrectGuesses}.flac`);
    audio.play();
  }


}
