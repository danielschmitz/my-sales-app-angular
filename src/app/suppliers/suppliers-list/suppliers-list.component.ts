import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { Observable, lastValueFrom } from 'rxjs';
import { Supplier } from '../suppliers.dto';
import { SupplierService } from '../supplier.service';
import { LoadingBarComponent } from '../../loading-bar.component';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SupplierCardComponent } from './supplier-card/supplier-card.component';

@Component({
  selector: 'app-suppliers-list',
  standalone: true,
  imports: [MaterialModule, LoadingBarComponent, AsyncPipe, RouterLink, SupplierCardComponent],
  templateUrl: './suppliers-list.component.html',
  styles: ``,
})
export class SuppliersListComponent implements OnInit {
  suppliers: Supplier[];
  supplierObservable: Observable<Supplier[]>;

  constructor(private supplierService: SupplierService) {}

  async ngOnInit() {
    this.supplierObservable = this.supplierService.getAll();
    this.suppliers = await lastValueFrom(this.supplierObservable);
  }
}
