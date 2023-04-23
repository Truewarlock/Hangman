import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HangmanDirective } from './directives/hangman.directive';
import { HangmanComponent } from './components/hangman/hangman.component';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HangmanDirective,
    HangmanComponent,
    InfoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
