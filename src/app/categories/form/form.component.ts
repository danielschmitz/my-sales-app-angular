import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Category } from '../category.dto';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [MatButtonModule, MatInputModule,ReactiveFormsModule, MatCardModule],
  templateUrl: './form.component.html',
  styles: ``
})
export class CategoryFormComponent {

  @Output() back = new EventEmitter();
  @Output() save = new EventEmitter<Category>();

  @Input()
  set category(category: Category) {
    this.categoryForm.setValue(category);
  }

  private fb = inject(FormBuilder);
  categoryForm = this.fb.group({
    id: [null],
    name: ["", [Validators.required, Validators.minLength(3)]],
    description: ["", Validators.required]
  })

  onSubmit() {
    console.log("Button save clicked in the CategoryFormComponent");
    this.save.emit(this.categoryForm.value as Category);
  }

  onBack() {
    this.back.emit();
  }

}
