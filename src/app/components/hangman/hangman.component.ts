import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.less']
})
export class HangmanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOfIncorrectGuesses:number=3;

  play(){
    let audio = new Audio('assets/sounds/1.mp3');
    audio.play();
  }

}
