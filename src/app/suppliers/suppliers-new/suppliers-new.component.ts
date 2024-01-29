import { Component, OnInit, inject } from '@angular/core';
import { SuppliersFormComponent } from '../suppliers-form/suppliers-form.component';
import { Supplier } from '../suppliers.dto';
import { MaterialModule } from '../../material.module';
import { Observable, lastValueFrom, of } from 'rxjs';
import { Router } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { AsyncPipe } from '@angular/common';
import { LoadingBarComponent } from '../../loading-bar.component';

@Component({
  selector: 'app-suppliers-new',
  standalone: true,
  templateUrl: './suppliers-new.component.html',
  styles: ``,
  imports: [
    MaterialModule,
    SuppliersFormComponent,
    AsyncPipe,
    LoadingBarComponent,
  ],
})
export class SuppliersNewComponent implements OnInit {
  router = inject(Router);
  supplierService = inject(SupplierService);
  supplierObservable: Observable<Supplier>;
  supplier: Supplier = this.supplierService.create();

  async ngOnInit() {
    this.supplierObservable = await of(this.supplierService.create());
    this.supplier = await lastValueFrom(this.supplierObservable);
  }

  async onSave(supplier: Supplier) {
    this.supplierObservable = this.supplierService.save(supplier);
    const result = await lastValueFrom(this.supplierObservable);
    this.router.navigate(['/suppliers/show', result.id]);
  }

  onBack() {
    this.router.navigate(['suppliers']);
  }
}
