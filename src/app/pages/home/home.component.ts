import { Product } from '../../interfaces/product.model';
import { CartService } from './../../services/cart.service';
import { Component, EventEmitter, Output } from '@angular/core';

const ROWS_HEIGHT : { [id : number] : number } = { 1 : 350 , 3 : 490 , 4 : 470 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cols : number = 3;
  category: string | undefined;
  colsNum : number = 3;
  rowHeight : number = ROWS_HEIGHT[this.cols];
  @Output() columns = new EventEmitter<number>();


  constructor(private cartService : CartService) {
    
  }

  onColumnsCountChange(newColsNumber : number) : void {
    this.cols = newColsNumber;
    this.rowHeight = ROWS_HEIGHT[newColsNumber];
    this.colsNum = newColsNumber;
  }

  onShowCategory(categoryName : string) : void {
    this.category = categoryName;
  }

   onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
}
