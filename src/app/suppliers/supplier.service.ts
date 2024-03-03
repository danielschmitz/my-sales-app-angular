import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Supplier } from './suppliers.dto';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {

  private http = inject(HttpClient);

  public getAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(environment.api + 'suppliers');
  }

  public getById(id: Number): Observable<Supplier> {
    return this.http.get<Supplier>(environment.api + 'suppliers/' + id);
  }

  public save(supplier: Supplier): Observable<Supplier> {
    if (supplier.id)
      return this.http.put<Supplier>(
        environment.api + 'suppliers/' + supplier.id,
        supplier
      );

    return this.http.post<Supplier>(environment.api + 'suppliers', supplier);
  }

  public delete(id?: number): Observable<Supplier> {
    return this.http.delete<Supplier>(environment.api + 'suppliers/' + id);
  }

  public create(): Supplier {
    return {
      id: 0,
      companyName: '',
      contactName: '',
      contactTitle: '',
      address: {
        city: '',
        phone: '',
        country: '',
        postalCode: 0,
        region: '',
        street: '',
      },
    };
  }
}
