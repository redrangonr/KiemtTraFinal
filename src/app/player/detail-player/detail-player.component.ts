import { Component, OnInit } from '@angular/core';
import {Player} from "../../model/player";
import {PlayerService} from "../../service/player.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-player',
  templateUrl: './detail-player.component.html',
  styleUrls: ['./detail-player.component.css']
})
export class DetailPlayerComponent implements OnInit {
  players: Player;
  id: string;
  constructor( private playerService: PlayerService,
               private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(sucsess => {
// @ts-ignore
      this.id = sucsess.get('id');
      console.log(this.id);
      this.playerService.getById(this.id).subscribe(sucses => {
        // @ts-ignore
        this.players = sucses;
        console.log(sucses);
      }, error => {
        console.log(error)
      })
    })
  }

}
