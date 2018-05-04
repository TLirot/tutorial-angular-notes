import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app'
  my_notes = [];
  note = { id: null, title: null, description: null };
  showForm = false;
  editing = false;
  action: string = '';
  addNote() {
    this.showForm = true;
    this.action = 'Nueva';
    this.resetNote();
  }
  hideForm() {
    this.showForm = false;
  }
  createNote() {
    if (this.editing) {
      //Editar
      var me = this;
      this.my_notes.forEach(function (el, i) {
        if (el.id === me.note.id) {
          me.my_notes[i] = me.note;
        }
      });
    } else {
      this.note.id = Date.now();
      this.my_notes.push(this.note);
    }
    this.hideForm();
  }
  viewNote(note) {
    this.editing = true;
    this.action = 'Editar';
    this.note = note;
    this.showForm = true;
  }

  resetNote() {
    this.note = { id: null, title: null, description: null };
  }
}
