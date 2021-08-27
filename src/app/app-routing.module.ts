import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPlayerComponent} from "./player/list-player/list-player.component";
import {CreatePlayerComponent} from "./player/create-player/create-player.component";
import {EditPlayerComponent} from "./player/edit-player/edit-player.component";
import {DeletePlayerComponent} from "./player/delete-player/delete-player.component";
import {DetailPlayerComponent} from "./player/detail-player/detail-player.component";

const routes: Routes = [
  {
    path: '',
    component: ListPlayerComponent
  },
  {
    path: 'create',
    component: CreatePlayerComponent
  },
  {
    path: 'edit/:id',
    component: EditPlayerComponent
  },
  {
    path: 'delete/:id',
    component: DeletePlayerComponent
  },
  {
    path: 'detail/:id',
    component: DetailPlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
