import { createSlice, configureStore, createSelector } from '@reduxjs/toolkit';
import { formatDate } from './utilities/formatDate';

export type Note = {
    id: string;
    name: string;
    created: string;
    category: string;
    content: string;
    archived: boolean;
};

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [
            {
                id: 'mJw2V8QSJvXP8oxDRCxtx',
                name: 'Shopping list',
                created: formatDate('2021-04-20'),
                category: 'Task',
                content: 'Tomatoes, bread',
                archived: false
            },
            {
                id: 'IlGyAgKu2kaYqkTCz3XsP',
                name: 'The theory of evolution',
                created: formatDate('2021-04-27'),
                category: 'Random Thought',
                content: 'The evolution',
                archived: false
            },
            {
                id: '9yt7tuujSJSiEvpHv8bQW',
                name: 'New Feature',
                created: formatDate('2021-05-05'),
                category: 'Idea',
                content: 'Implement new feature on the 5/5/2021, I moved it from 3/5/2021',
                archived: false
            },
            {
                id: 'c1M6f6kyHTInmry1_DqVf',
                name: 'William Gaddis',
                created: formatDate('2021-05-07'),
                category: 'Random Thought',
                content: `Power doesn't come`,
                archived: false
            },
            {
                id: 'favgzqesK53D3SolNVa-E',
                name: 'Books',
                created: formatDate('2021-05-15'),
                category: 'Task',
                content: 'The Lean Startup',
                archived: false
            },
            {
                id: 'z9-LNyQqIELrBgfmzMezZ',
                name: 'Gym',
                created: formatDate('2022-01-01'),
                category: 'Task',
                content: 'Leg day',
                archived: false
            },
            {
                id: 'TT8qKOgNPsbh5Ehf1mfEW',
                name: 'Swimming pool',
                created: formatDate('2023-07-25'),
                category: 'Task',
                content: 'Improve my freestyle',
                archived: false
            }
        ] as Note[]
    },
    reducers: {
        addNote: (state, action: { payload: Note }) => {
            state.notes.push(action.payload);
        },
        editNote: (state, action: { payload: { id: string, name: string, category: string, content: string } }) => {
            const index = state.notes.findIndex((note) => note.id === action.payload.id);
            state.notes[index] = {
                ...state.notes[index],
                name: action.payload.name,
                category: action.payload.category,
                content: action.payload.content
            };
        },
        toggleArchiveNote: (state, action: { payload: { id: string, archived: boolean } }) => {
            const index = state.notes.findIndex((note) => note.id === action.payload.id);
            state.notes[index] = {
                ...state.notes[index],
                archived: !action.payload.archived
            };
        },
        unarchiveNotes: (state) => {
            state.notes.forEach((note) => {
                note.archived = false;
            });
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload);
        },
        removeNotes: (state) => {
            state.notes = [];
        }
    }
});

export const { addNote, editNote, toggleArchiveNote, unarchiveNotes, removeNote, removeNotes } = notesSlice.actions;

const selectSelf = (state: { notes: Note[] }) => state;

export const selectNotes = createSelector(
    selectSelf,
    (state) => state.notes || []
);

const store = configureStore({
    reducer: notesSlice.reducer
});

export default store;
