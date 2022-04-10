import { Component, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
   new Quote(1,'Be the CHANGE that you wish to see in the world','Mahatma Gandhi','Submitted by:',new Date(2022,3,6),0,0),
   new Quote(2,'Life is like a question and how we live it is our answer','Gary Keller','Submitted by:',new Date(2022,3,1),0,0),
   new Quote(3,'It always seems impossible until it is done','Nelson Mandela','Submitted by:',new Date(2022,2,6),0,0),
   new Quote(4,'Life has no CTRL+Z','Mercy Alpha','Submitted by:',new Date(2022,3,6),0,0)
    
  ];
  toggleDetails(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete: any, index: number){
    
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`)
      if (toDelete){
      this.quotes.splice(index,1);
    }
    }
  }
  // upVote(){
  //   this.quotes.upvotes++;    //increases upvotes
  // }
  
  
  // downVote(){
  //   this.quotes.downvotes++;    //increases downvotes
  
  // }
  constructor() { }

  ngOnInit(): void {
  }

}

function author(arg0: string): string {
  throw new Error('Function not implemented.');
}

