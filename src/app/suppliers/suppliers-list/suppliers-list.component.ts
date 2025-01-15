import { Component, OnInit, inject } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { EMPTY, Observable, catchError, empty, lastValueFrom, of } from 'rxjs';
import { Supplier } from '../suppliers.dto';
import { SupplierService } from '../supplier.service';
import { LoadingBarComponent } from '../../loading-bar.component';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SupplierCardComponent } from './supplier-card/supplier-card.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-suppliers-list',
    imports: [
        MaterialModule,
        LoadingBarComponent,
        AsyncPipe,
        RouterLink,
        SupplierCardComponent,
    ],
    templateUrl: './suppliers-list.component.html',
    styles: ``
})
export class SuppliersListComponent implements OnInit {
  suppliers$: Observable<Supplier[]>;
  error: string;
  private supplierService = inject(SupplierService);

  async ngOnInit() {
    this.suppliers$ = this.supplierService.getAll().pipe(
      catchError(error => {
        this.error = error.message
        return EMPTY
      })
    )
  }
}
