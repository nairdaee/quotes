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
    new Quotes(1, "Bow Down!", "Beyonce Giselle Knowles-Carter", new Date(2018,7,16), 'Audrey'),
    new Quotes(2, "Do what you were born to do. You just have to trust yourself.", "Beyonce Giselle Knowles-Carter", new Date(2018,7,17), 'Audrey'),
     

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
