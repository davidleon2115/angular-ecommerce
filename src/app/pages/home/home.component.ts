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

  onColumnsCountChange(newColsNumber : number) : void {
    this.cols = newColsNumber;
    this.rowHeight = ROWS_HEIGHT[newColsNumber];
    this.colsNum = newColsNumber;
  }

  onShowCategory(categoryName : string) : void {
    this.category = categoryName;
  }
}
