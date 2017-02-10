import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../shared/restapi.service';
import { Player } from '../shared/player';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  listOfPlayers: Player[];
  selectedPlayer: Player; 
   
  constructor(private apiService: RestApiService) { }
  

  ngOnInit() {
    this.listOfPlayers = this.apiService.getListOfPlayers();
  }

  setSelectedPlayer(selectedPlayer: Player){
     this.selectedPlayer = selectedPlayer;
  }

}
