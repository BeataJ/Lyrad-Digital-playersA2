import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { PlayerComponent } from './player.component';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [
    {path: 'player', component: PlayerComponent},
    {
        path:'register/player', 
        component: RegistrationComponent
    } 
    
];

@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlayerRoutingModule {}
