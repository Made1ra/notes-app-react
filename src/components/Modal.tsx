import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Note, addNote, editNote } from '../store';
import { nanoid } from 'nanoid';
import { formatDate } from '../utilities/formatDate';
import styled from 'styled-components';
import TextInput from './TextInput';
import Select from './Select';
import Textarea from './Textarea';
import SubmitButton from './SubmitButton';
import CancelButton from './CancelButton';

const Overlay = styled.div<{ $isOpen: boolean }>`
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000080;
    text-align: center;
`;

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 1em;
    border-radius: 0.1em;
    box-shadow: 0 0 0.1em #0000004d;
`;

type ModalProps = {
    $isOpen: boolean;
    isEditing: boolean;
    selectedNote: Note | null;
    onClose: () => void;
};

function Modal({ $isOpen, isEditing, selectedNote, onClose }: ModalProps) {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [category, setCategory] = useState('Task');
    const [content, setContent] = useState('');

    if (!$isOpen) {
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
        <Overlay $isOpen={$isOpen}>
            <Content>
                <h2>{isEditing ? 'Edit Note' : 'Create New Note'}</h2>
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
