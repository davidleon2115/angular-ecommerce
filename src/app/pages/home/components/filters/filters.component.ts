import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Output() onFilter = new EventEmitter<string>();

  categories : string[] = [ "Shoes" , "Sport" ];
  
  onShowCategory(category : string) : void{
    this.onFilter.emit(category);
  }
}
