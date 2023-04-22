import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  constructor() { }

  selectedWord:string=""
  wordDisplay:string=""

  listOfWords:string[]=[
    "aaa",
    "abc",
    "ccc"
  ]

  selectAWord(){
    const randomNumber=Math.floor(Math.random() * this.listOfWords.length);
    this.selectedWord=this.listOfWords[randomNumber]

  }


}
