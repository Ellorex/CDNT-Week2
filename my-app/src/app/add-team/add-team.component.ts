import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from '../datasources';
import { Team } from '../../model/Team';

@Component({
  selector: 'add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  countries: string[] = [];
  team: Team = new Team('', '', '', '', null, null, '');

  constructor() { }

  ngOnInit() {
    this.countries = COUNTRIES;
  }
  onSubmit() {
    console.log(this.team);
  }

}
