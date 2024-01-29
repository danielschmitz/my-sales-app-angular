import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Observable, lastValueFrom } from 'rxjs';
import { LoadingBarComponent } from '../../loading-bar.component';
import { MaterialModule } from '../../material.module';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../suppliers.dto';

@Component({
  selector: 'app-suppliers-delete',
  standalone: true,
  imports: [MaterialModule, AsyncPipe, LoadingBarComponent, RouterLink],
  templateUrl: './suppliers-delete.component.html',
  styles: ``,
})
export class SuppliersDeleteComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  supplierService = inject(SupplierService);
  supplier: Supplier;
  supplierObservable: Observable<Supplier>;

  async ngOnInit() {
    const id: Number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.supplierObservable = this.supplierService.getById(id);
    this.supplier = await lastValueFrom(this.supplierObservable);
  }

  onBack() {
    this.router.navigate(['/suppliers/show/', this.supplier.id]);
  }

  async confirmDelete() {
    this.supplierObservable = this.supplierService.delete(this.supplier.id)
    await lastValueFrom(this.supplierObservable)
    this.router.navigate(['/suppliers']);
  }
}
