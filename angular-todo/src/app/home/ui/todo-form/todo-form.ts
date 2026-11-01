import { Component, inject, output} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateTodo } from '../../../shared/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  imports: [ReactiveFormsModule],
  template: `<form [formGroup]="todoForm" (ngSubmit)="todoSubmited.emit(todoForm.getRawValue())">
               <input type="text" formControlName="title" placeholder="title..."/>
               <input type="text" formControlName="description" placeholder="description..." />
               <button type="submit" [disabled]="!todoForm.valid">Add todo</button>
               </form>
               `,
  styleUrl: './todo-form.css',
})
export class TodoForm {
  private fb = inject(FormBuilder);

  todoForm = this.fb.nonNullable.group({
  title:['', Validators.required],
  description: [''],
  });

  todoSubmited = output<CreateTodo>();
}
