import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Quotes} from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  numberOfLikes: number;
  numberOfDislikes: number;

  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  likeVote(): boolean{
    this.numberOfLikes++;
    return false;
  }
  dislikeVote(): boolean{
    this.numberOfDislikes++;
    return false;
  }

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { 
    this.numberOfLikes = 0;
    this.numberOfDislikes = 0;
  }

  ngOnInit() {
  }

}
