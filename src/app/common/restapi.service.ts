import { Injectable } from '@angular/core';

import { Player } from './player';
import { Team  } from './team';
import { MACK_PLAYER } from './mack-player';
import { MACK_TEAM } from './mack-team';


@Injectable()
export class RestApiService {

  getListOfPlayers(): Player[] {
      return MACK_PLAYER;
  }

  getListOfTeams(): Team[] {
      return MACK_TEAM;
  }
}