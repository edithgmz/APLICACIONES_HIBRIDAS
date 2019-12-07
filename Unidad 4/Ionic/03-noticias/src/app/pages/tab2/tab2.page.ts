import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild(IonSegment, { static: true }) segment: IonSegment;

  noticias: Article[] = [];

  categorias = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.segment.value = this.categorias[0];
    this.cargarNoticias(this.segment.value);
  }

  loadData(event) {
    this.cargarNoticias(this.segment.value, event);
  }

  cambiarCategoria(event) {
    this.noticias = [];
    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias(categoria: string, event?) {
    this.noticiasService.getTopHeadLinesCategoria(categoria).subscribe(resp => {
      console.log('categoria', resp);
      // Comprobar que ya no hay más artículos
      if (resp.articles.length === 0) {
        event.target.disabled = true;
        event.target.complete();
        return;
      }
      this.noticias.push(...resp.articles);
      // Comprueba el evento
      if (event) {
        event.target.complete();
      }
    });
  }
}
