import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [MatButtonModule, MatInputModule,ReactiveFormsModule, MatCardModule],
  templateUrl: './form.component.html',
  styles: ``
})
export class CategoryFormComponent {

  private fb = inject(FormBuilder);
  categoryForm = this.fb.group({
    id: [null],
    name: [null, [Validators.required, Validators.minLength(3)]],
    description: [null, Validators.required]
  })

}
