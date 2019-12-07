import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Anime } from '../interfaces/interfaces-anime';
import { Manga } from '../interfaces/interfaces-manga';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AnimeMangaService {
  animePageOffset = 0;
  mangaPageOffset = 0;
  animeName = '';
  mangaName = '';

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string) {
    query = apiUrl + query;
    return this.http.get<T>(query);
  }

  getAnimeList(pageOffset: number) {
    this.animePageOffset += pageOffset;
    return this.ejecutarQuery<Anime>(`/anime?page[limit]=20&page[offset]=${this.animePageOffset}`);
  }

  getAnimeName(name: string) {
    this.animeName = name;
    return this.ejecutarQuery<Anime>(
      `/anime?filter[text]=${name}`
    );
  }

  getMangaList(pageOffset: number) {
    this.mangaPageOffset += pageOffset;
    return this.ejecutarQuery<Manga>(`/manga?page[limit]=20&page[offset]=${this.mangaPageOffset}`);
  }

  getMangaName(name: string) {
    this.mangaName = name;
    return this.ejecutarQuery<Manga>(
      `/manga?filter[text]=${name}`
    );
  }
}
