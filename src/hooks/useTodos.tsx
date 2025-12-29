import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Todo = {
    id: string;
    title: string;
    completed: boolean;
    createdAt: string;
    description: string;
}

type TodoContextValue = {
    addTodo: (title: string, description: string) => void;
    removeTodo: (id: string) => void;
    todos: Todo[];
    toggleTodo: (id: string) => void;
    stats: {
        total: number
        completed: number
        active: number
        completionRate: number
    };
}

const STORAGE_KEY = 'todo-list';

const TodosContext = createContext<TodoContextValue | undefined>(undefined);

const createId = () => Math.random().toString(32);

const readFromStorage = (): Todo[] => {
    try {
        const todo = globalThis.localStorage.getItem(STORAGE_KEY);
        if (!todo) return [];
        const parsedTodo = JSON.parse(todo) as Todo[];
        return Array.isArray(parsedTodo) ? parsedTodo : [];
    }
    catch (error) {
        console.error('Unable to read todos from storage', error);
        return [];
    }
}

const useTodosState = (): TodoContextValue => {
    const [todos, setTodos] = useState<Todo[]>(() => readFromStorage());

    useEffect(() => {
        try {
            globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        }
        catch (error) {
            console.error('Unable to save todos', error)
        }
    }, [todos]);

    const addTodo = (title: string, description = '') => {
        const trimmedTitle = title.trim();
        const trimmedDescription = description.trim();
        setTodos((current) => [
            {
                id: createId(),
                title: trimmedTitle,
                description: trimmedDescription,
                createdAt: new Date().toISOString(),
                completed: false
            },
            ...current])
    }

    const removeTodo = (id: string) => {
        setTodos((current) => current.filter((todo) => todo.id !== id))
    }

    const toggleTodo = (id: string) => {
        setTodos((current) => current.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
    }

    const stats = useMemo(() => {

        const completed = todos.filter(todo => todo.completed).length;
        const total = todos.length;
        return {
            completed,
            active: total - completed,
            total,
            completionRate: total === 0 ? 0 : Math.round((completed / total) * 100)
        }
    }, [todos])

    return { addTodo, removeTodo, todos, toggleTodo, stats };
}

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const value = useTodosState();
    return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}
export const useTodos = () => {
    const contex = useContext(TodosContext);
    if (!contex) {
        throw new Error('useTodos must be used inside a TodosProvider')
    }
    return contex;
}