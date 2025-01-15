import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { MaterialModule } from '../material.module';
import { CartItem } from '../cart.dto';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-checkout',
    imports: [MaterialModule, CurrencyPipe],
    templateUrl: './checkout.component.html',
    styles: ``
})
export class CheckoutComponent implements OnInit{
  cartService = inject(CartService)
  public items: CartItem[] = [];

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onRemoveItem(item:CartItem) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }


}
