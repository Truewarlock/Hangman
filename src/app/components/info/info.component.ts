import { Component, OnInit } from '@angular/core';
import { GameStateService } from 'src/app/services/game-state.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {

  constructor(public gameState:GameStateService) { }

  ngOnInit(): void {
    this.gameState.selectAWord();
  }

}
