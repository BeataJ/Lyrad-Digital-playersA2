import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team.routing';
import { SharedModule } from '../shared/shared.module';
import { TeamEditComponent } from './team-edit/team-edit.component';


@NgModule({
    imports: [CommonModule, ReactiveFormsModule, TeamRoutingModule, SharedModule],
    
    declarations: [TeamComponent, TeamEditComponent],
})
export class TeamModule {}
