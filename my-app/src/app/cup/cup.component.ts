import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../model/Team';
import { TeamsComponent } from '../teams/teams.component';

@Component({
  selector: 'cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.css']
})
export class CupComponent implements OnInit {
  
  @Input('nb')nb: number;
  markup: string = '';

  constructor() { }

 
  ngOnInit() {
    let img_markup = "<img class='cup' src='/assets/img/cup.png' alt='' >";
    for (let i =0; i <this.nb; i++) {
      this.markup +=img_markup;
    }
  }

}
