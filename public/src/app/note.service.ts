import { Injectable } from '@angular/core';
import { Http } from '@angular/http';//
import "rxjs";

@Injectable()
export class NoteService {
  constructor(private _http: Http) { }//

  retrieveNotes() {
    return this._http.get('/notes')
    .map( data => data.json() )
    .toPromise();
  }
  writeNote(note) {
    return this._http.post('/newnote', note)
    .map((data) => data.json())
    .toPromise();
  }
}
