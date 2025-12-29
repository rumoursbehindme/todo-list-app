import styled, { css } from 'styled-components'
import type { Todo } from '../hooks/useTodos'

type Props = {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);

  @media (max-width: 540px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
  }
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 2px solid #7cd1ff;
  position: relative;
  cursor: pointer;
  transition: border 0.15s ease, background 0.15s ease;
  background: rgba(124, 209, 255, 0.12);

  &:checked {
    background: linear-gradient(135deg, #7cf0c0 0%, #4f9bff 100%);
    border-color: transparent;
  }

  &:checked::after {
    content: '✓';
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 800;
    color: #081026;
  }

  &:focus-visible {
    outline: 2px solid #7cd1ff;
    outline-offset: 3px;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`

const Title = styled.span<{ $completed: boolean }>`
  font-weight: 700;
  font-size: 15px;
  color: #f1f5ff;
  letter-spacing: -0.01em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  ${({ $completed }) =>
    $completed &&
    css`
      color: #7f92b3;
      text-decoration: line-through;
    `}
`

const Meta = styled.span`
  color: #9fb2d3;
  font-size: 13px;
`

const DeleteButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.04);
  color: #f6c4a2;
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s ease;
  justify-self: end;

  &:hover {
    background: rgba(255, 200, 164, 0.12);
    color: #ffdfa8;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

function TodoItem({ todo, onToggle, onDelete }: Readonly<Props>) {
  const createdLabel = new Date(todo.createdAt).toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <Item>
      <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} aria-label="Toggle todo" />
      <Details>
        <Title $completed={todo.completed}>{todo.title}</Title>
        <span>{todo.description}</span>
        <Meta>{todo.completed ? 'Completed' : 'Added'} • {createdLabel}</Meta>
      </Details>
      <DeleteButton type="button" onClick={() => onDelete(todo.id)}>
        Delete
      </DeleteButton>
    </Item>
  )
}

export default TodoItem
