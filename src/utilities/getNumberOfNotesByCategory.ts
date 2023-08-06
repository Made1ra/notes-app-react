import { Note } from '../store';

export function getNumberOfNotesByCategory(notes: Note[], category: string, archived: boolean) {
    return notes.filter((note) => note.category === category && note.archived === archived).length;
}
