import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/Team';
import { Input } from '@angular/core';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  // team: Team = new Team('Juventus', 'Juventus-logo.png', 'Allegri', 1897);

  @Input('data-team')team: Team;

  constructor() { }

  ngOnInit() {

  }

}
