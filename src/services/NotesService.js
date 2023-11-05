import { Service } from "./Service";

export class NotesService extends Service {
  constructor() {
    super();
    this._notes = [];
  }

  set notes(value) {
    this._notes = value;
    this.__fireUpdate();
  }

  get notes() {
    return this._notes;
  }

  addNote(id, title, text) {
    this._notes.push({
      id: id,
      title: title,
      text: text,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    this.__fireUpdate();
  }

  updateNote(id, title, text) {
    const index = this._notes.findIndex((item) => item.id === id);
    if (index === -1) return false;
    this._notes[index].title = title;
    this._notes[index].text = text;
    this._notes[index].updatedAt = Date.now();
    this.__fireUpdate();
    return true;
  }

  removeNote(id) {
    const index = this._notes.findIndex((item) => item.id === id);
    if (index === -1) return false;
    this._notes.splice(index, 1);
    this.__fireUpdate();
    return true;
  }

  getNoteByID(id) {
    const index = this._notes.findIndex((item) => item.id === id);
    return this._notes[index];
  }

  getNotesByDate(asc = true) {
    let notes;
    if (asc) {
      return this._notes.sort((a, b) => a.updatedAt - b.updatedAt);
    }
    return this._notes.sort((a, b) => b.updatedAt - a.updatedAt);
  }
}
