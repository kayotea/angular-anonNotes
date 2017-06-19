import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';//
import { FormsModule } from '@angular/forms';//

import { AppComponent } from './app.component';
import { NoteService } from './note.service';//

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,//
    HttpModule//
  ],
  providers: [NoteService],//
  bootstrap: [AppComponent]
})
export class AppModule { }
