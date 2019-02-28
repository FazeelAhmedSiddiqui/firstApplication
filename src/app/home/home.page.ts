import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import { AddnotePage } from '../addnote/addnote.page';
import { Router } from '@angular/router';
import { NoteserviceService } from '../noteservice.service';
import { Note } from 'src/note.module';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router:Router, private noteService:NoteserviceService){

  }
  notes:Note[]=[];
 // ionViewWillEnter()
  //{
    //this.notes=this.getAllNotes();
  //}
addNotes(){
 this.router.navigateByUrl('/addnote');
}
getAllNotes()
{
return this.noteService.getAllNotes();
}

}
