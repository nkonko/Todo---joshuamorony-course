import { Component, inject, input } from '@angular/core';
import { Todo } from '../../../shared/interfaces/todo';
import { RouterLink } from '@angular/router';
import { TodoService } from '../../../shared/interfaces/data-access/todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [RouterLink],
  template: `<ul>
              @for (todo of todos(); track todo.id) {
                <li>
                  <input type="checkbox" [checked]="todo.checked" (change)="toggleTodo(todo, !todo.checked)" />
                  <a routerLink="/detail/{{todo.id}}">{{ todo.title }}</a>
                </li>
              } @empty {
              <li>Nothing to do!</li>
              }
            </ul>
              `,
  styleUrl: './todo-list.css',
})
export class TodoList {
  private readonly todoService = inject(TodoService);
  todos = input.required<Todo[]>();

  toggleTodo(todo: Todo, checked: boolean) {
    todo.checked = checked;
    this.todoService.updateTodo(todo);
  }
}
