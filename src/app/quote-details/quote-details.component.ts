import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
   @Input() quotes!:Quote;
   @Output ()isComplete = new EventEmitter<boolean>();
   
   quotesDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  

   upVote(i: any){
    this.quotes.upvotes++;    //increases upvotes
}


downVote(i: any){
    this.quotes.downvotes++;    //increases downvotes

}
  constructor() { }

  ngOnInit(): void {
  }
}
