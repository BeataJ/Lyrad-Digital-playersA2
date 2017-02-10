import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlayerComponent } from './player.component';
import { PlayerRoutingModule } from './player.routing';
import { SharedModule } from '../shared/shared.module';
import { PlayerProfileComponent } from './player-profile/player-profile.component';

@NgModule({
    imports: [CommonModule, FormsModule, PlayerRoutingModule, SharedModule],
    declarations: [PlayerComponent, PlayerProfileComponent],
})
export class PlayerModule {}