import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes';
import { Quote } from '@angular/compiler';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  quotes: Quotes[] = [
  


  ];


  constructor() { }

  ngOnInit(): void {
  }

}
