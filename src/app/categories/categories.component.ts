import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CategoriesItem } from './categories-datasource';
import { CategoryService } from './category.service';
import { lastValueFrom } from 'rxjs';
import { Category } from './category.dto';
import { CategoryFormComponent } from './form/form.component';
import { LoadingBarComponent } from '../loading-bar.component';
import { MaterialModule } from '../material.module';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styles: `
    .full-width-table {
      width: 100%;
    }

  `,
    imports: [MaterialModule, CategoryFormComponent, LoadingBarComponent]
})
export class CategoriesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CategoriesItem>;
  dataSource = new MatTableDataSource<Category>();

  showLoading: Boolean = false;

  category!: Category;

  showForm: Boolean = false;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description', 'actions'];

  constructor(private categoryService: CategoryService) {}

  ngAfterViewInit(): void {
    this.loadCategories();
  }

  async loadCategories(): Promise<void> {
    this.showLoading = true;
    const categories = await lastValueFrom(this.categoryService.getAll());
    this.dataSource = new MatTableDataSource(categories);
    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.showLoading = false;
  }

  onNewCategoryClick() {
    this.category = {
      id: 0,
      name: '',
      description: '',
    };
    this.showForm = true;
  }

  hideCategoryForm() {
    this.showForm = false;
    this.loadCategories();
  }

  async onSave(category: Category) {
    const saved = await lastValueFrom(this.categoryService.save(category));
    this.hideCategoryForm();
  }

  onEditCategoryClick(category: Category) {
    this.category = category;
    this.showForm = true;
  }

  async onDeleteCategoryClick(category: Category) {
    console.log('delete category', category);

    if (confirm(`Delete "${category.name}" with id ${category.id} ?`)) {
      this.showLoading = true;
      await lastValueFrom(this.categoryService.delete(category.id));
      this.showLoading = false;
      this.loadCategories();
    }
  }
}
