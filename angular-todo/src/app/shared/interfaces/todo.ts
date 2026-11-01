export interface Todo {
    id: string;
    title: string;
    description: string;
    checked: boolean;
}

export type CreateTodo = Omit<Todo, 'id' | 'checked'>;
