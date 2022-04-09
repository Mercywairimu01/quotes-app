import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    {id:1, name:'quote1',description:'Submitted by:'},
    {id:2, name:'quote2',description:'Submitted by:'},
    {id:3, name:'quote3',description:'Submitted by:'},
    {id:4, name:'quote4',description:'Submitted by:'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
