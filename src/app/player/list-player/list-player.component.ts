import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../service/player.service";
import {Player} from "../../model/player";

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {
players: Player[];
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getlist();
  }
getlist(){
    this.playerService.getAll().subscribe(sucsess =>this.players =sucsess);
}
}
