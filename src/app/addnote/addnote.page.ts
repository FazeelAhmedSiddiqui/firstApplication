import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../noteservice.service';
import { Note } from 'src/note.module';
import {FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.page.html',
  styleUrls: ['./addnote.page.scss'],
})
export class AddnotePage implements OnInit {
  formgroup: FormGroup
  constructor(private noteservice:NoteserviceService) { }
  saveNote(note:Note){
this.noteservice.saveNote(note); 
  }

  ngOnInit() {
  }

}
