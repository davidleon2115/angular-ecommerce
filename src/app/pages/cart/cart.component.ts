import { Component } from '@angular/core';
import { Cart } from '../../interfaces/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart : Cart = { items : [
    {
      product : 'https://via.placeholder.com/150',
      name : 'Snicker',
      price : 150000,
      quantity : 1,
      id: 1
    }
  ]}
}
