import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  noticias: Article[] = [];

  constructor(private storage: Storage,
              public toastController: ToastController) {
    this.cargarFavoritos();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  borrarNoticia(noticia: Article) {
    this.noticias = this.noticias.filter(noti => noti.title !== noticia.title);
    this.storage.set('favoritos', this.noticias);
    this.presentToast('Eliminado de favoritos');
  }

  guardarNoticia(noticia: Article) {
    const existe = this.noticias.find(noti => noti.title === noticia.title);
    if (!existe) {
      this.noticias.unshift(noticia); // Lo último agregado se encuentra al inicio
      this.storage.set('favoritos', this.noticias);
    }
    this.presentToast('Agregado a favoritos');
  }

  async cargarFavoritos() {
    const favoritos = await this.storage.get('favoritos');
    if(favoritos) {
      this.noticias = favoritos;
    }
    /* Funciona pero no es el ideal
      this.storage.get('favoritos').then(favoritos => {
        console.log('favoritos', favoritos);
      });
    */
  }
}
