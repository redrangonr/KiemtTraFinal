import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../service/player.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Player} from "../../model/player";

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {
  playerForm: FormGroup = this.formBuilder.group({
    name: new FormControl('',[Validators.required]),
    champ: new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required]),
    kda: new FormControl('',[Validators.required]),
  })
  constructor(private playerService: PlayerService,
              private formBuilder: FormBuilder,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
Create(){
    const player = this.playerForm.value;
    this.playerService.createBook(player).subscribe(sucsess =>alert('thanh cong'))
}
}
