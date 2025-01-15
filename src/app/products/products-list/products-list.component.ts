import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, lastValueFrom } from 'rxjs';
import { Product } from '../product.dto';
import { ProductService } from '../product.service';
import { MaterialModule } from '../../material.module';
import { AsyncPipe } from '@angular/common';
import { LoadingBarComponent } from '../../loading-bar.component';
import { CartService } from '../../cart.service';
import { CartItem } from '../../cart.dto';
import { ProductsCardComponent } from '../products-card/products-card.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: ``,
  imports: [
    MaterialModule,
    AsyncPipe,
    LoadingBarComponent,
    ProductsCardComponent,
  ],
})
export class ProductsListComponent implements OnInit {
  productService = inject(ProductService);
  fb = inject(FormBuilder);
  cartService = inject(CartService);

  products: Product[];
  productsObservable: Observable<Product[]>;
  searchForm: FormGroup;

  async ngOnInit() {
    this.searchForm = this.fb.group({
      searchTerm: [''],
    });
    this.fetchProducts();
  }

  private async fetchProducts(searchTerm?: string) {
    this.productsObservable = this.productService.getAll(searchTerm);
    this.products = await lastValueFrom(this.productsObservable);
  }

  async onSearch() {
    await this.fetchProducts(this.searchForm.value.searchTerm);
    console.log(this.products);
  }

  onAddToCart(item: Product) {
    const cartItem: CartItem = {
      idProduct: item.id,
      name: item.name,
      quantity: 1,
      unitPrice: item.unitPrice,
    };
    this.cartService.addItem(cartItem);
  }
}
