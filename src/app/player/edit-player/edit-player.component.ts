import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../service/player.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Player} from "../../model/player";

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  players: Player;
  id: string;
  playerForm: FormGroup = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    champ: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    kda: new FormControl('', [Validators.required]),
  });

  constructor(private playerService: PlayerService,
              private activeRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
  }

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

  Submit() {
    const players = this.playerForm.value;
    console.log(players)
    this.playerService.updateBook(this.id, players).subscribe(sucsess => {
      alert('thanh cong')
    })
  }
}
