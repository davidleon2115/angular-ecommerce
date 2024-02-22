import { Component, Input } from '@angular/core';
import { Cart, CartItem } from '../../interfaces/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private cartService : CartService) { }

  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);
      
  }

  getTotal( items : Array<CartItem> ) : number {
    return this.cartService.getTotal(items)
  }

  onClearCart() : void {
    this.cartService.clearCart();
  }

}