import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PlayerComponent } from './player.component';
import { PlayerRoutingModule } from './player.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, PlayerRoutingModule],
    declarations: [PlayerComponent],
})
export class PlayerModule {}