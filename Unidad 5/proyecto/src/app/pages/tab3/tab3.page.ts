import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { AnimeDatum } from '../../interfaces/interfaces-anime';
import { MangaDatum } from '../../interfaces/interfaces-manga';
import { AnimeMangaService } from '../../services/animemanga.service';
import { DatalocalService } from '../../services/datalocal.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  @ViewChild(IonSegment, { static: true }) segment: IonSegment;
  animes: AnimeDatum[] = [];
  mangas: MangaDatum[] = [];
  secciones = ['anime', 'manga'];
  favoritos: string;

  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(public datalocalService: DatalocalService) {}

  ngOnInit() {
    this.segment.value = this.secciones[0];
    this.favoritos = this.secciones[0];
    this.datalocalService.cargarFavoritosAnime();
  }

  changeSection(event) {
    switch (event.detail.value) {
      case this.secciones[0]:
        this.datalocalService.cargarFavoritosAnime();
        break;
      case this.secciones[1]:
        this.datalocalService.cargarFavoritosManga();
        break;
    }
  }
}
