import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  constructor() { }

 numberOfIncorrectGuesses:number=1;
 selectedWord:[string, boolean][]=[]

  listOfWords:string[]=[
    "elephant",
    "discombobulated",
    "bamboozeled"
  ]

  selectAWord(){
    const randomNumber=Math.floor(Math.random() * this.listOfWords.length);
    const splitLetters=this.listOfWords[randomNumber].split("")
    splitLetters.forEach(letter => {
      this.selectedWord.push([letter,false])
    });
    this.selectedWord[0][1]=true
    this.selectedWord[this.selectedWord.length-1][1]=true
    console.log(this.selectedWord)
  }

  mistake$=new EventEmitter<void>();
  guessALetter(letter:string){
    if(!this.selectedWord.some((x)=> x[0]===letter)){

      this.numberOfIncorrectGuesses++;
      this.mistake$.next()
      console.log(this.numberOfIncorrectGuesses)
    }

    this.selectedWord.map((x)=>{
      if(x[0]===letter){
        x[1]=true;
      }
    })
  }


}
