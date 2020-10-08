import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/enums/category';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.html',
  styleUrls: ['./first-component.less']
})
export class FirstComponent implements OnInit {

  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Aircraft';
    this.description = 'Aircraft';
    this.price = 10000000;
    this.category = Category.Vehicle;
    this.isAvailable = true;
  }

}
