import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlayerComponent } from './player.component';
import { PlayerRoutingModule } from './player.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [CommonModule, FormsModule, PlayerRoutingModule, SharedModule],
    declarations: [PlayerComponent],
})
export class PlayerModule {}