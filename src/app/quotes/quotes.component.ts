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

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.submitDate = new Date()
    quote.numberOfLikes = 0;
    quote.numberOfDislikes = 0;
    this.quotes.push(quote)
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
