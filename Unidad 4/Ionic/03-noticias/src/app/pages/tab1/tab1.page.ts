import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.cargarNoticias();
  }

  loadData(event) {
    this.cargarNoticias(event);
  }

  // ? significa que es opcional
  cargarNoticias(event?) {
    // Reiniciar el servicio después de modificar esto
    this.noticiasService.getTopHeadLines().subscribe(resp => {
      console.log('noticias', resp);
      // Comprobar que ya no hay más artículos
      if (resp.articles.length === 0) {
        event.target.disabled = true;
        event.target.complete();
        return;
      }
      // Para trabajar con los artículos independiente (... > operador sper)
      this.noticias.push(...resp.articles);
      // Comprobar que el evento se cumplió
      if (event) {
        event.target.complete();
      }
    });
  }
}
