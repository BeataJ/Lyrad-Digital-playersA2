import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TeamComponent } from './team.component';

const routes: Routes = [
    {path: 'team', component: TeamComponent}
];

@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeamRoutingModule {}