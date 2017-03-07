import { Component, Input } from '@angular/core';

import { Player } from '../../shared/player';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent  {
  @Input()
  selectedPlayer: Player;
  editPosition = false;
  editHeight = false;
  editWeight = false;

  getDisplayFlag(displayFlag: boolean): string {
    return displayFlag ? 'inline': 'none';
  }

  showEditPosition() {
    this.editPosition = true;
  }

  savePosition() {
    this.editPosition = false;
  }

  showEditHeight() {
    this.editHeight = true;
  }

  saveHeight() {
    this.editHeight = false;
  }

  showEditWeight() {
    this.editWeight = true;
  }

  saveWeight() {
    this.editWeight = false;
  }
}
