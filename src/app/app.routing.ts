import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PlayerComponent } from './player/player.component';
import { NotFoundComponent } from './not-found.component';


const routes: Routes = [
    {path: 'team', loadChildren: 'app/team/team.module#TeamModule'}, 
    {path: '', component: PlayerComponent},
    
    {path: '**', component: NotFoundComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {}