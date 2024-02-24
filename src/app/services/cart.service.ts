import { CartItem } from './../interfaces/cart.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../interfaces/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items : [] })
  constructor( private _snackBar: MatSnackBar) {}
  
  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this.showMessage(`${item.name} Product added to cart`);
    console.log(items)
    
  }

  getTotal(items : Array<CartItem>) : number{
    return items.map(
      (item)=>item.price * item.quantity
    ).reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0
    )
  }

  clearCart() : void {
    this.cart.next({items:[]});
    this.showMessage( "Your cart has been cleared.")
  }

  removeFromCart(item : CartItem) : void {
    this.cart.value.items = this.cart.value.items.filter((_item) => _item !== item);
    this.showMessage("1 Item removed from the cart.");
  }

  showMessage( message : string ) : void {
    this._snackBar.open( message , 'Ok' , {duration : 3000})
  }
}
