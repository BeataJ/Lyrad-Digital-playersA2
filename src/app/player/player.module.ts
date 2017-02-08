import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PlayerComponent } from './player.component';
import { PlayerRoutingModule } from './player.routing';
import { CommonModule } from '../common/common.module';

@NgModule({
    imports: [BrowserModule, FormsModule, PlayerRoutingModule, CommonModule],
    declarations: [PlayerComponent],
})
export class PlayerModule {}