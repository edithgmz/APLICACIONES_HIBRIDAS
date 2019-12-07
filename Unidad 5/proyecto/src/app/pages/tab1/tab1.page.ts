import { Component, OnInit } from '@angular/core';
import { AnimeDatum, AnimeAttributes } from '../../interfaces/interfaces-anime';
import { AnimeMangaService } from '../../services/animemanga.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  pageOffset = 0;
  buscar = '';
  animes: AnimeDatum[] = [];
  animesName: AnimeDatum[] = [];

  constructor(private animeMangaService: AnimeMangaService) {}

  ngOnInit() {
    this.loadAnimeList();
    this.animesName = [];
  }

  search(event) {
    this.buscar = event.detail.value;
    this.animesName = [];
    this.loadAnimeName();
  }

  cancelSearch(event) {
    this.buscar = '';
    this.animesName = [];
  }

  loadData(event) {
    this.loadAnimeList(event);
  }

  loadAnimeList(event?) {
    this.animeMangaService.getAnimeList(this.pageOffset).subscribe(resp => {
      console.log('lista', resp);
      if (resp.data.length === 0) {
        event.target.disabled = true;
        event.target.complete();
        return;
      }
      this.pageOffset += 20;
      this.animes.push(...resp.data);
      if (event) {
        event.target.complete();
      }
    });
  }

  loadAnimeName(event?) {
    if (this.buscar !== '') {
      this.animeMangaService.getAnimeName(this.buscar).subscribe(resp => {
        console.log('busqueda', resp);
        if (resp.data.length === 0) {
          return;
        }
        this.animesName.push(...resp.data);
        if (event) { }
      });
    }
  }

}
