import styled from 'styled-components';
import type { Todo } from '../hooks/useTodos'
import TodoItem from './TodoItem';

type Props = {
    todos: Todo[];
    onToggle(id: string): void;
    onDelete(id: string): void;
}

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`
const Empty = styled.div`
  padding: 28px 22px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  color: #a6b8d8;
  text-align: center;
  font-weight: 600;
  letter-spacing: -0.01em;
`


function TodoList({todos, onToggle, onDelete}: Props) {
    if(todos.length === 0){
        return(
            <Empty>
                Nothing Here
            </Empty>
        )
    }
    return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </List>
  )
}

export default TodoList;