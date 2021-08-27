import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../service/player.service";
import {ActivatedRoute} from "@angular/router";
import {Player} from "../../model/player";

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent implements OnInit {
player: Player[]
  constructor(private playerService: PlayerService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
