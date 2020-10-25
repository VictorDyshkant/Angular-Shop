import { AfterViewInit, ElementRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('appTitle') title: ElementRef<HTMLElement>;

  ngAfterViewInit(){
    this.title.nativeElement.innerText = "Angular-Shop";

  }

}
