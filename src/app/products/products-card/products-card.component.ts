import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { Product } from '../product.dto';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './products-card.component.html',
  styles: ``,
})
export class ProductsCardComponent {
  @Input() product: Product;

  onAddToCart(product: Product) {
    console.log("TODO")
  }
}
