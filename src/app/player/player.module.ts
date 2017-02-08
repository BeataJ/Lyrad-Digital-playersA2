import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PlayerComponent } from './player.component';
import { PlayerRoutingModule } from './player.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [BrowserModule, FormsModule, PlayerRoutingModule, SharedModule],
    declarations: [PlayerComponent],
})
export class PlayerModule {}