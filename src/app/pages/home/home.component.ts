import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cols : number = 3;
  category: string | undefined;

  onColumnsCountChange(newColsNumber : number) : void {
    this.cols = newColsNumber;
  }

  onShowCategory(categoryName : string) : void {
    this.category = categoryName;
  }
}
