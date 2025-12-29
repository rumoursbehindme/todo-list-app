import styled from 'styled-components';
import { useTodos } from '../hooks/useTodos';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { useMemo } from 'react';

const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;

    @media (max-width: 640px) {
        flex-direction: column;
        align-items:flex-start;
    }
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const H2 = styled.h2`
  margin: 0;
  font-size: 22px;
  letter-spacing: -0.02em;
  color: #f3f6ff;
`
const SubTitle = styled.span`
    color: #9fb2d3;
`

const Chip = styled.span`
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(124, 209, 255, 0.12);
  color: #9fe7ff;
  border: 1px solid rgba(124, 209, 255, 0.4);
  font-weight: 700;
  letter-spacing: -0.01em;
`

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  gap: 12px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Note = styled.span`
  color: #9fb2d3;
  font-weight: 600;
`

const ClearButton = styled.button`
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: #f6c4a2;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.12s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 200, 164, 0.12);
    color: #ffdfa8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
type Props = {
    filter: 'all' | 'active' | 'completed'
}


function TodoPage({ filter }: Props) {
    const { addTodo, removeTodo, todos, toggleTodo } = useTodos();

    const filteredTodos = useMemo(() => {
        if (filter === 'active') return todos.filter((todo) => !todo.completed);
        if (filter === 'completed') return todos.filter((todo) => todo.completed);
        return todos;
    }, [filter, todos]);

    return (
        <div>
            <SectionHeader>
                <Title>
                    <H2>Your List</H2>
                </Title>
            </SectionHeader>

            <TodoInput onAdd={addTodo} />
            <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={removeTodo} />

        </div>
    )
}

export default TodoPage;