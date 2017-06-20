import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';//
import { FormsModule } from '@angular/forms';//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{//
  constructor(private _noteService: NoteService) {}//
  note = new Note();
  notes = [];

  ngOnInit() {
    this.getNotes();
  }

  getNotes(){
    this._noteService.retrieveNotes()
    .then(notes => {this.notes = notes; console.log('notes retrived', this.notes);})
    .catch(error => {console.log("error in app.component.ts/ngOnInit")})
  }

  addNote(){
    this.note.created = new Date;
    this._noteService.writeNote(this.note)
    .then(note => {
      console.log('note added');
      this.getNotes();
    })
    .catch(error => {console.log('error in app.component.ts/addNote()')})
    this.note = new Note();
  }
}

class Note {
  public note: string
  public created: Date
}