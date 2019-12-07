import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-text',
  templateUrl: './skeleton-text.page.html',
  styleUrls: ['./skeleton-text.page.scss']
})
export class SkeletonTextPage implements OnInit {
  datos: any;

  constructor() {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.datos = {
        cabecera: 'Objeto',
        parrafo1: 'Lorem ipsum dolor sit amet, consectetur',
        parrafo2: 'adipiscing elit.'
      };
    }, 5000);
  }

  ngOnInit() {}
}
