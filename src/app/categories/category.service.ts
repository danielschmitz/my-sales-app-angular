import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from './category.dto';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.api + 'categories');
  }

  public save(category: Category): Observable<Category> {
    if (category.id)
      return this.http.put<Category>(
        environment.api + 'categories/' + category.id,
        category
      );

    return this.http.post<Category>(environment.api + 'categories', category);
  }

  public delete(id: number) {
    return this.http.delete(environment.api + 'categories/' + id);
  }
}
