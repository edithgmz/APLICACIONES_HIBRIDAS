import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headlinesPage = 0;
  categoriaActual = '';
  categoriaPage = 0;

  constructor(private http: HttpClient) { }

  // Privado porque hace petición de archivos
  private ejecutarQuery<T>(query: string) {
    query = apiUrl + query;
    return this.http.get<T>(query, {headers});
  }

  getTopHeadLines() {
    this.headlinesPage++;
    return this.ejecutarQuery<RespuestaTopHeadlines>(
      `/top-headlines?country=us&page=${this.headlinesPage}`
    );
    // tslint:disable-next-line: max-line-length
    // return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c19264e5abff41d5925c955b665ed16c');
  }

  getTopHeadLinesCategoria(categoria: string) {
    // Comprobar en cuál categoría se encuentra
    if (this.categoriaActual === categoria) {
      this.categoriaPage++;
    } else {
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }
    // Devuelve la categoría con su número de página
    return this.ejecutarQuery<RespuestaTopHeadlines>(
      `/top-headlines?country=us&category=${categoria}&page=${this.headlinesPage}`
    );
  }
}
