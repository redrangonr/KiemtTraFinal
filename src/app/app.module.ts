import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeletePlayerComponent } from './player/delete-player/delete-player.component';
import { ListPlayerComponent } from './player/list-player/list-player.component';
import { EditPlayerComponent } from './player/edit-player/edit-player.component';
import { CreatePlayerComponent } from './player/create-player/create-player.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DeletePlayerComponent,
    ListPlayerComponent,
    EditPlayerComponent,
    CreatePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
