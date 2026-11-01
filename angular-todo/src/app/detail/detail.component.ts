import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../shared/interfaces/data-access/todo.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-detail.component',
  imports: [],
  template: `    @if (todo(); as todo){
      <h2>{{ todo.title }}</h2>
      <p>{{ todo.description }}</p>
      <button (click)="todoService.removeTodo(todo.id)">Remove Todo</button>
    } @else {
      <p>Could not find todo...</p>
      <button (click)="goBack()">Go Back</button>
    }`,
  styleUrl: './detail.component.css',
})
export default class DetailComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private todoService = inject(TodoService);

  private paramMap = toSignal(this.route.paramMap);

  todo = computed(() =>
    this.todoService.todosPub().find( todo => todo.id === this.paramMap()?.get('id'))
  );

  goBack() {
    this.router.navigate(['/home']);
  }
}
