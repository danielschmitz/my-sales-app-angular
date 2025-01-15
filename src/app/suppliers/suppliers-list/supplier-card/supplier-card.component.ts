import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { Supplier } from '../../suppliers.dto';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-supplier-card',
    imports: [MaterialModule, RouterLink],
    templateUrl: './supplier-card.component.html',
    styles: `mat-card-content:hover{
    background-color: #def;
    cursor: pointer;
  }`
})
export class SupplierCardComponent {
  @Input({required: true}) supplier: Supplier
}
