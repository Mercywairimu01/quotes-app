import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
   new Quote(1,'quote1','Submitted by:'),
   new Quote(2,'quote2','Submitted by:'),
   new Quote(3,'quote3','Submitted by:'),
   new Quote(4,'quote4','Submitted by:')
    
  ];
  toggleDetails(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
