import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team.routing';
import { CommonModule } from '../common/common.module';

@NgModule({
    imports: [BrowserModule, FormsModule, TeamRoutingModule, CommonModule],
    
    declarations: [TeamComponent],
})
export class TeamModule {}
