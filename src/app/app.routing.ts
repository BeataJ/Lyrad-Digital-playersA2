import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TeamComponent } from './team/team.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
    {path: '', component: TeamComponent},
    {path: 'player', loadChildren: 'app/player/player.module#PlayerModule'},
    {path: '**', component: NotFoundComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {}