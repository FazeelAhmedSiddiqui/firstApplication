import { Injectable } from '@angular/core';
import{ Storage } from '@ionic/storage'; 
import { Note } from 'src/note.module';
import { notEqual } from 'assert';
@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
private notes:Note[]=[];
  constructor(public Storage:Storage) {
    console.log('hello NoteServiceProvider provider');

   }

   saveNote(note:Note)
   {
     note.createDate=Date.now();
     this.notes.push(note);
     this.Storage.set('notes',this.notes);
   }
   getAllNotes(){
     return this.Storage.get('notes').then((notes)=>{
       this.notes=notes == null?[]:notes;
       return this.notes.slice;
     })
   }
}
