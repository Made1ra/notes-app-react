import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Note,
  selectNotes,
  toggleArchiveNote,
  archiveNotes,
  unarchiveNotes,
  removeNote,
  removeNotes,
} from './store';
import { extractDatesFromNoteContent } from './utilities/extractDatesFromNoteContent';
import { getNumberOfNotesByCategory } from './utilities/getNumberOfNotesByCategory';
import Container from './components/Container';
import TableContainer from './components/TableContainer';
import Table from './components/Table';
import Thead from './components/Thead';
import Th from './components/Th';
import Tr from './components/Tr';
import Td from './components/Td';
import Button from './components/Button';
import CreateButton from './components/CreateButton';
import ButtonContainer from './components/ButtonContainer';
import Heading from './components/Heading';
import Modal from './components/Modal';

function App() {
  const categories = ['Task', 'Random Thought', 'Idea'];

  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();

  const [showArchivedNotes, setShowArchivedNotes] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null)

  const handleAddNote = () => {
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEditNote = (note: Note) => {
    setSelectedNote(note);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleNote = (id: string, archived: boolean) => {
    dispatch(toggleArchiveNote({ id, archived }));
  };

  const archiveAll = () => {
    dispatch(archiveNotes());
  }

  const unarchiveAll = () => {
    dispatch(unarchiveNotes());
  }

  const remove = (id: string) => {
    dispatch(removeNote(id));
  };

  const removeAll = () => {
    dispatch(removeNotes());
  }

  return (
    <Container>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Created</Th>
              <Th>Category</Th>
              <Th>Content</Th>
              <Th>Dates</Th>
              <Th />
              <Th>
                <Button
                  onClick={() => archiveAll()}
                  disabled={notes.filter((note) => !note.archived).length === 0}
                >
                  Archive All
                </Button>
              </Th>
              <Th>
                <Button
                  onClick={() => removeAll()}
                  disabled={notes.length === 0}
                >
                  Remove All
                </Button>
              </Th>
            </Tr>
          </Thead>
          <tbody>
            {notes.map((note) => (
              !note.archived && (
                <Tr key={note.id}>
                  <Td>
                    {note.name}
                  </Td>
                  <Td>
                    {note.created}
                  </Td>
                  <Td>
                    {note.category}
                  </Td>
                  <Td>
                    {note.content}
                  </Td>
                  <Td>
                    {extractDatesFromNoteContent(note.content).join(', ')}
                  </Td>
                  <Td>
                    <Button onClick={() => handleEditNote(note)}>
                      Edit
                    </Button>
                  </Td>
                  <Td>
                    <Button onClick={() => toggleNote(note.id, note.archived)}>
                      Archive
                    </Button>
                  </Td>
                  <Td>
                    <Button onClick={() => remove(note.id)}>
                      Remove
                    </Button>
                  </Td>
                </Tr>
              )
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <CreateButton onClick={() => handleAddNote()}>Create Note</CreateButton>
      <Table>
        <Thead>
          <Tr>
            <Th>Note Category</Th>
            <Th>Active</Th>
            <Th>Archived</Th>
          </Tr>
        </Thead>
        <tbody>
          {categories.map((category) => (
            <Tr key={category}>
              <Td>
                {category}
              </Td>
              <Td>
                {getNumberOfNotesByCategory(notes, category, false)}
              </Td>
              <Td>
                {getNumberOfNotesByCategory(notes, category, true)}
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
      <ButtonContainer>
        {!showArchivedNotes ?
          <Button onClick={() => setShowArchivedNotes(true)}>Show archived notes</Button> :
          <Button onClick={() => setShowArchivedNotes(false)}>Hide archived notes</Button>
        }
      </ButtonContainer>
      {showArchivedNotes && (
        <>
          {notes.filter((note) => note.archived).length === 0 ? (
            <Heading>There is no archived note yet</Heading>
          ) : (
            <>
              <Heading>Archived Notes</Heading>
              <TableContainer>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Created</Th>
                      <Th>Category</Th>
                      <Th>Content</Th>
                      <Th>Dates</Th>
                      <Th>
                        <Button onClick={() => unarchiveAll()}>
                          Unarchive All
                        </Button>
                      </Th>
                    </Tr>
                  </Thead>
                  <tbody>
                    {notes.map((note) => (
                      note.archived && (
                        <Tr key={note.id}>
                          <Td>
                            {note.name}
                          </Td>
                          <Td>
                            {note.created}
                          </Td>
                          <Td>
                            {note.category}
                          </Td>
                          <Td>
                            {note.content}
                          </Td>
                          <Td>
                            {extractDatesFromNoteContent(note.content).join(', ')}
                          </Td>
                          <Td>
                            <Button onClick={() => toggleNote(note.id, note.archived)}>
                              Unarchive
                            </Button>
                          </Td>
                        </Tr>
                      )
                    ))}
                  </tbody>
                </Table>
              </TableContainer>
            </>
          )}
        </>
      )}
      <Modal
        isOpen={isModalOpen}
        isEditing={isEditing}
        selectedNote={selectedNote}
        onClose={handleCloseModal}
      />
    </Container >
  );
}

export default App;
