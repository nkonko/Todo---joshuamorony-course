import { Component, inject } from '@angular/core';
import { TodoForm } from './ui/todo-form/todo-form';
import { TodoService } from '../shared/interfaces/data-access/todo.service';
import { TodoList } from './ui/todo-list/todo-list';

@Component({
  selector: 'app-home',
  imports: [TodoForm, TodoList],
  template: `<h2>Todo</h2>
              <app-todo-form (todoSubmited)="todoService.addTodo($event)"/>
              <app-todo-list [todos]="todoService.todosPub()"/>
              <button (click)="removeSelectedTodos()">Remove Selected</button>
            `,
  styleUrl: './home.css',
})
export default class Home {
  todoService = inject(TodoService);

  removeSelectedTodos() {
    this.todoService.removeSelectedTodos();
  }

 
}
