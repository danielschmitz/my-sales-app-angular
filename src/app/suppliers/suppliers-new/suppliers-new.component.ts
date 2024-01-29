import { Component } from '@angular/core';
import { SuppliersFormComponent } from '../suppliers-form/suppliers-form.component';
import { Supplier } from '../suppliers.dto';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-suppliers-new',
  standalone: true,
  imports: [MaterialModule, SuppliersFormComponent],
  templateUrl: './suppliers-new.component.html',
  styles: ``
})
export class SuppliersNewComponent {
  supplier:Supplier = {
    id: null,
    companyName: '',
    contactName: '',
    contactTitle: '',
    address: {
      city: '',
      country: '',
      phone: '',
      postalCode: 0,
      region: '',
      street: ''
    }
  };
}
