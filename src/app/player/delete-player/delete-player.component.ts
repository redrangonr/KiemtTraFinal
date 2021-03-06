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
players: Player;
id: string;

  constructor(private playerService: PlayerService,
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
  delete(id: any) {
    this.playerService.deleteBook(id).subscribe(susess => alert('thanh cong'));
  }
}
