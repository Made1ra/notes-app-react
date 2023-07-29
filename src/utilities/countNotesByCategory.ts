import { Note } from '../store';

export function countNotesByCategory(notes: Note[], archived: boolean) {
    return notes
        .filter((note) => note.archived === archived)
        .reduce((acc: Record<string, number>, note) => {
            acc[note.category] = (acc[note.category] || 0) + 1;
            return acc;
        }, {});
}
