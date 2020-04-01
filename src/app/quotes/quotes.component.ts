import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  quotes: Quotes[] = [
    new Quotes(1, "It is when we fall that we can only rise", "Roman Stevenson", new Date(2018,7,16), 'Audrey'),
    new Quotes(2, "He who is calm has already won the fight", "Mohamed Ali", new Date(2020,2,31), 'Jane Kinyua'),
    new Quotes(2, "Music is a shorthand of emotion", "Leo Tosloy", new Date(2019,2,31), 'Edith Kobi'),
    new Quotes(2, "Patience is a virtue that rewards the endurers", "Adika Asumpta", new Date(2018,2,31), 'Steve Kuria'),
    new Quotes(2, "Time waits for no man", "Ken Pitt", new Date(2019,2,20), 'Emmanuel Oshwal'),
    new Quotes(2, "A successful individual will never succumb to laziness", "Trevor Boat", new Date(2020,1,11), 'Audrey Amolo'),
     

  ];

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  addNewQuote(quotes) {
    let quoteLength = this.quotes.length;
    quotes.submitDate = new Date()
    quotes.numberOfLikes = 0;
    quotes.numberOfDislikes = 0;
    this.quotes.push(quotes)
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

  ngOnInit() {
  }

}
