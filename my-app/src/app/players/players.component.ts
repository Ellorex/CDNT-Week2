import { Component, OnInit } from '@angular/core';
import { Player } from '../../model/Player';
import { PlayerService } from '../player.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[] = [];
  playersfiltered: Player[] = [];
  clubSelected: string;
  positions: string[];
  positionSelected: string = '0';
  
  constructor(private playerService: PlayerService) { }
  
  ngOnInit() {
    this.playerService.getPlayersFromServer()
      .subscribe(res => {
        res.forEach(player => {
          if (this.teams.indexOf(player.current_team) == -1) {
            this.teams.push(player.current_team);
          }

          if(this.positions.indexOf(player.position) == -1) {
            this.positions.push(player.position);
          }
        });
        this.playerService.setPlayers(this.players);
        
      })
    ;
    
  }
  filterPlayerByTeam() {
    if (this.clubSelected == '0') {
      this.playersfiltered = this.players;
    } else {
      this.playersfiltered = this.players.filter((player: Player) => player.current_team == this.clubSelected);
    }
  }
  filterPlayerByPosition() {
    if (this.positionSelected == '0') {
      this.playersfiltered = this.players;
    } else {
      this.playersfiltered = this.players.filter((player: Player) => player.position == this.positionSelected);
    }
  }
}
