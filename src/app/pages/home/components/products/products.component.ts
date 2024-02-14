import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  sort : string = 'desc';
  itemsCount : number = 12;

  onSortUpdated(newSort : string) : void {
    this.sort  = newSort;
  }

  onItemsUpdated(newItemsCount : number) : void {
    this.itemsCount = newItemsCount;
  }
}
