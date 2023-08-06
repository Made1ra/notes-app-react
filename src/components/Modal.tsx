import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Note, addNote, editNote } from '../store';
import { nanoid } from 'nanoid';
import { formatDate } from '../utilities/formatDate';
import Overlay from './Overlay';
import Content from './Content';
import Heading from './Heading';
import TextInput from './TextInput';
import Select from './Select';
import Textarea from './Textarea';
import SubmitButton from './SubmitButton';
import CancelButton from './CancelButton';

type ModalProps = {
    isOpen: boolean;
    isEditing: boolean;
    selectedNote: Note | null;
    onClose: () => void;
};

function Modal({ isOpen, isEditing, selectedNote, onClose }: ModalProps) {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [category, setCategory] = useState('Task');
    const [content, setContent] = useState('');

    if (!isOpen) {
        return null;
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    };

    const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value)
    };

    const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isEditing && selectedNote) {
            const editedNote: Note = {
                ...selectedNote,
                name,
                category,
                content
            };
            dispatch(editNote(editedNote));
        } else {
            const date = String(new Date());
            const newNote = {
                id: nanoid(),
                name,
                created: formatDate(date),
                category,
                content,
                archived: false
            };
            dispatch(addNote(newNote));
        }
        setName('');
        setCategory('Task');
        setContent('');
        onClose();
    };

    return (
        <Overlay isOpen={isOpen}>
            <Content>
                <Heading>{isEditing ? 'Edit Note' : 'Add New Note'}</Heading>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="name">Name:</label>
                    <TextInput
                        value={name}
                        onChange={(e) => handleNameChange(e)}
                        required
                    />
                    <br />
                    <label htmlFor="category">Category:</label>
                    <Select
                        id="category"
                        value={category}
                        onChange={(e) => handleCategoryChange(e)}
                    >
                        <option value="Task">Task</option>
                        <option value="Random Thought">Random Thought</option>
                        <option value="Idea">Idea</option>
                    </Select>
                    <br />
                    <label htmlFor="content">Content:</label>
                    <Textarea
                        id="content"
                        value={content}
                        onChange={(e) => handleContentChange(e)}
                        required
                    />
                    <br />
                    <SubmitButton>Submit</SubmitButton>
                </form>
                <CancelButton onClick={() => onClose()}>Cancel</CancelButton>
            </Content>
        </Overlay>
    );
}

export default Modal;
