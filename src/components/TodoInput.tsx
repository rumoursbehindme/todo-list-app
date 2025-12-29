import { useState, type FormEvent } from "react";
import styled from 'styled-components';


const Form = styled.form`
  display: grid;
  /* grid-template-columns: 1fr auto auto; */
  gap: 12px;
  align-items: center;
  margin-bottom: 18px;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`

const TitleField = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
  color: #f2f4ff;
  font-size: 15px;
  outline: none;
  transition: border 0.12s ease, background 0.12s ease;

  &::placeholder {
    color: #9fb2d3;
  }

  &:focus {
    border-color: #7cd1ff;
    background: rgba(255, 255, 255, 0.06);
  }
`
const DescriptionField = styled.input`
  width: 100%;
  height: 100px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
  color: #f2f4ff;
  font-size: 15px;
  outline: none;
  transition: border 0.12s ease, background 0.12s ease;

  &::placeholder {
    color: #9fb2d3;
  }

  &:focus {
    border-color: #7cd1ff;
    background: rgba(255, 255, 255, 0.06);
  } 
`

const Submit = styled.button`
     padding: 14px 18px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #74f0ff 0%, #4f9bff 55%, #7c7bff 100%);
  color: #0b0f1d;
  font-weight: 700;
  letter-spacing: -0.01em;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(116, 240, 255, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 36px rgba(79, 155, 255, 0.35);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 8px 22px rgba(79, 155, 255, 0.25);
  }
`

type Props = {
    onAdd: (title: string, description: string) => void
}

function TodoInput({ onAdd }: Props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAdd(title, description);
        setTitle('');
        setDescription('')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <TitleField
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Add Todo"
                aria-label="Add a todo"
            />
            <DescriptionField
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Give me a description"
                aria-label="Add a todo description"
            />

            <Submit type="submit">Add Task</Submit>
        </Form>
    )
}

export default TodoInput