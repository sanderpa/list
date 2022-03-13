import { Component } from '@angular/core';
import { Note } from './note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  constructor() {}

  notes: Note[] = [];
  newNote: string;

  saveNote() {
    if (this.newNote) {
      let note = new Note();
      note.title = this.newNote;
      note.isComplete = true;
      this.notes.push(note);
      this.newNote = '';
      console.log(this.notes);
    } else {
      alert('Please enter new note before added it');
    }
  }

  delete(id: number) {
    this.notes = this.notes.filter((e, i) => i !== id);
    console.log(this.notes);
  }
}
