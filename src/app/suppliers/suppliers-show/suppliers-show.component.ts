import { Component, OnInit, inject } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../suppliers.dto';
import { Observable, lastValueFrom } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LoadingBarComponent } from '../../loading-bar.component';

@Component({
    selector: 'app-suppliers-show',
    imports: [MaterialModule, AsyncPipe, LoadingBarComponent, RouterLink],
    templateUrl: './suppliers-show.component.html',
    styles: ``
})
export class SuppliersShowComponent implements OnInit {
  route = inject(ActivatedRoute);
  supplierService = inject(SupplierService)
  supplier:Supplier;
  supplierObservable: Observable<Supplier>;

  async ngOnInit() {
    const id: Number = +(this.route.snapshot.paramMap.get('id')||0);
    this.supplierObservable = this.supplierService.getById(id);
    this.supplier = await lastValueFrom(this.supplierObservable);
    console.log(this.supplier);
  }
}
