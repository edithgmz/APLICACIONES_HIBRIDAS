import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { AnimeDatum } from '../interfaces/interfaces-anime';
import { MangaDatum } from '../interfaces/interfaces-manga';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {
  animes: AnimeDatum[] = [];
  mangas: MangaDatum[] = [];

  constructor(private storage: Storage,
              public toastCtrl: ToastController) {
    this.cargarFavoritosAnime();
    this.cargarFavoritosManga();
  }

  async mostrarToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 500
    });
    toast.present();
  }

  // Anime
  borrarAnime(anime: AnimeDatum) {
    this.animes = this.animes.filter(ani => ani.id !== anime.id);
    this.storage.set('favoritosAnime', this.animes);
    this.mostrarToast('Eliminado de favoritos.');
  }

  guardarAnime(anime: AnimeDatum) {
    const existe = this.animes.find(ani => ani.id === anime.id);
    if (!existe) {
      this.animes.unshift(anime);
      this.storage.set('favoritosAnime', this.animes);
    }
    this.mostrarToast('Añadido a favoritos.');
  }

  async cargarFavoritosAnime() {
    const favoritosAnime = await this.storage.get('favoritosAnime');
    if (favoritosAnime) {
      this.animes = favoritosAnime;
    }
  }

  // Manga
  guardarManga(manga: MangaDatum) {
    const existe = this.mangas.find(man => man.id === manga.id);
    if (!existe) {
      this.mangas.unshift(manga);
      this.storage.set('favoritosManga', this.mangas);
    }
    this.mostrarToast('Añadido a favoritos.');
  }

  borrarManga(manga: MangaDatum) {
    this.mangas = this.mangas.filter(man => man.id !== manga.id);
    this.storage.set('favoritosManga', this.mangas);
    this.mostrarToast('Eliminado de favoritos.');
  }

  async cargarFavoritosManga() {
    const favoritosManga = await this.storage.get('favoritosManga');
    if (favoritosManga) {
      this.mangas = favoritosManga;
    }
  }
}
