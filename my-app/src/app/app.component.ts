import { Component } from '@angular/core';
import { NgModel} from '@angular/forms';
import { Book } from '../model/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Formation Angular'
}

