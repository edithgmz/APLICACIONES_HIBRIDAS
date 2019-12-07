import { Component, ViewChild, OnInit } from '@angular/core';
import { MangaDatum } from '../../interfaces/interfaces-manga';
import { AnimeMangaService } from '../../services/animemanga.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  pageOffset = 0;
  buscar = '';
  mangas: MangaDatum[] = [];
  mangasName: MangaDatum[] = [];

  constructor(private animeMangaService: AnimeMangaService) {}

  ngOnInit() {
    this.loadMangaList();
    this.loadMangaName();
  }

  search(event) {
    this.buscar = event.detail.value;
    this.mangasName = [];
    this.loadMangaName();
  }

  cancelSearch(event) {
    this.buscar = '';
    this.mangasName = [];
  }

  loadData(event) {
    this.loadMangaList(event);
  }

  loadMangaList(event?) {
    this.animeMangaService.getMangaList(this.pageOffset).subscribe(resp => {
      console.log('lista', resp);
      if (resp.data.length === 0) {
        event.target.disabled = true;
        event.target.complete();
        return;
      }
      this.pageOffset += 20;
      this.mangas.push(...resp.data);
      if (event) {
        event.target.complete();
      }
    });
  }

  loadMangaName(event?) {
    if (this.buscar !== '') {
      this.animeMangaService.getMangaName(this.buscar).subscribe(resp => {
        console.log('busqueda', resp);
        if (resp.data.length === 0) {
          return;
        }
        this.mangasName.push(...resp.data);
        if (event) { }
      });
    }
  }
}
