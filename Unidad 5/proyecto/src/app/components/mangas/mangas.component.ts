import { Component, OnInit, Input } from '@angular/core';
import { MangaDatum } from '../../interfaces/interfaces-manga';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.scss'],
})
export class MangasComponent implements OnInit {
  @Input() mangas: MangaDatum[] = [];
  @Input() enFavoritos = false;

  constructor() { }

  ngOnInit() {}

}
