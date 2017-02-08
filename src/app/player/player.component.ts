import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../common/restapi.service';
import { Player } from '../common/player';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  listOfPlayers: Player[]; 
   
  constructor(private apiService: RestApiService) { }
  

  ngOnInit() {
    this.listOfPlayers = this.apiService.getListOfPlayers();
  }

}
