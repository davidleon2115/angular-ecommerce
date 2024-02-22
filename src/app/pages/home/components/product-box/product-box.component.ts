import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../interfaces/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.css'
})
export class ProductBoxComponent {
  @Input() colState: number | undefined;
  @Input() fullWidthMode = false;
  product : Product | undefined = 
  {
    id: 1,
    title: "Smartphone",
    price: 599,
    category: "Electronics",
    description: "A high-performance smartphone with advanced features.",
    image: "https://source.unsplash.com/featured/?smartphone"
  };
  @Output() addToCart = new EventEmitter();
  
  onAddToCart() : void{
    this.addToCart.emit(this.product);
    
  }
}
