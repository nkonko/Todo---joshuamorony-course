import { Injectable, signal } from '@angular/core';
import { CreateTodo, Todo } from '../todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
    #todos = signal<Todo[]>([]);
    todosPub = this.#todos.asReadonly();

    addTodo(todo: CreateTodo) {
        this.#todos.update((todos) => [
            ...todos,
            {
            ...todo,
            id: Date.now().toString(),
            checked: false
            }
        ]);
    }

    updateTodo(todoUpd: Todo) {
       this.#todos.update((todos) => todos.map(todo => todo.id === todoUpd.id ? {...todo, ...todoUpd} : todo));
    }

    removeTodo(id: string) {
        this.#todos.update((todos) => todos.filter(todo => todo.id !== id));
    }

    removeSelectedTodos() {
        this.#todos.update((todos) => todos.filter(todos => !todos.checked));
    }
}
