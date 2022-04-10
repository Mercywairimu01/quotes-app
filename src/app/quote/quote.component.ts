import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
   new Quote(1,'quote1','Submitted by:',new Date(2022,3,6)),
   new Quote(2,'quote2','Submitted by:',new Date(2022,3,11)),
   new Quote(3,'quote3','Submitted by:',new Date(2022,2,6)),
   new Quote(4,'quote4','Submitted by:',new Date(2022,3,6))
    
  ];
  toggleDetails(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete: any, index: number){
    
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
