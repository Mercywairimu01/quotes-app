import { Component, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
   new Quote(1,'Be the CHANGE that you wish to see in the world','Mahatma Gandhi',"",'Terry',new Date(2022,3,6),0,0),
   new Quote(2,'Life is like a question and how we live it is our answer','Gary Keller',"",'Andy',new Date(2022,3,1),0,0),
   new Quote(3,'It always seems impossible until it is done','Nelson Mandela',"",'Prince',new Date(2022,2,6),0,0),
   new Quote(4,'Life has no CTRL+Z','Alpha M',"",'Beta',new Date(2022,3,6),0,0)
    
  ];
  // upper! =number:
  // low! =number;
  // count ! = number
  array:number[]= this.quotes.map(
    function(quote){
      return quote.id
    }
  )
  // most =Math.max(...this.array)
  most = this.quotes.unshift()
  
// most() {
//   this.upper = 0;
//   this.low = 0
//   for (this.count =0 ;this.count < this.quotes.length;this.count++){
//     this.low = this.quotes[this.count].upvotes;
//     if (this.low> this.upper){this.upper = this.low}
//   }
//   return this.upper
// }


  toggleDetails(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    Quote.id = quoteLength+1;
    Quote.completeDate = new Date(Quote.completeDate)
    this.quotes.push(quote)
  }
  deleteQuote(isComplete: any, index: number){
    
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`)
      if (toDelete){
      this.quotes.splice(index,1);
    }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

function author(arg0: string): string {
  throw new Error('Function not implemented.');
}

