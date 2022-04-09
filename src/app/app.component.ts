import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] =[
    {id:1, name:'quote1'},
    {id:2, name:'quote2'},
    {id:3, name:'quote3'},
    {id:4, name:'quote4'}
  ];
  
}
