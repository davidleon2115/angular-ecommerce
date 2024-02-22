import { Component } from '@angular/core';
import { Cart, CartItem } from '../../interfaces/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private cartService : CartService) { }

  cart : Cart = { items : [
    {
      product : 'https://via.placeholder.com/150',
      name : 'Snicker',
      price : 150000,
      quantity : 10,
      id: 1
    },
    {
      product : 'https://via.placeholder.com/150',
      name : 'Snicker',
      price : 15000,
      quantity : 1,
      id: 1
    },
    {
      product : 'https://via.placeholder.com/150',
      name : 'Snicker',
      price : 15000,
      quantity : 1,
      id: 1
    },
    {
      product : 'https://via.placeholder.com/150',
      name : 'Snicker',
      price : 15000,
      quantity : 1,
      id: 1
    },
    {
      product : 'https://via.placeholder.com/150',
      name : 'Snicker',
      price : 15000,
      quantity : 1,
      id: 1
    },
    {
      product : 'https://via.placeholder.com/150',
      name : 'Snicker',
      price : 15000,
      quantity : 1,
      id: 1
    },
    {
      product : 'https://via.placeholder.com/150',
      name : 'Snicker',
      price : 15000,
      quantity : 1,
      id: 1
    }
  ]}
  dataSource : Array<CartItem> = [];
  displayedColumns : Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items : Array<CartItem>) : number{
    return this.cartService.getTotal(items)
  }
}
