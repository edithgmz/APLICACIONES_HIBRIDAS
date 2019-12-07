import { Component, OnInit, Input } from '@angular/core';
import { AnimeDatum } from '../../interfaces/interfaces-anime';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {
  @Input() animes: AnimeDatum[] = [];
  @Input() enFavoritos = false;

  constructor() {}

  ngOnInit() {}

}
