import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPlayerComponent} from "./player/list-player/list-player.component";
import {CreatePlayerComponent} from "./player/create-player/create-player.component";

const routes: Routes = [
  {
    path: '',
    component: ListPlayerComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
