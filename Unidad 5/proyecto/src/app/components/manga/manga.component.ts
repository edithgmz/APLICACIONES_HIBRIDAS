import { Component, OnInit, Input } from '@angular/core';
import { MangaDatum } from '../../interfaces/interfaces-manga';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DatalocalService } from '../../services/datalocal.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss'],
})
export class MangaComponent implements OnInit {
  @Input() manga: MangaDatum;
  @Input() indice: number;
  @Input() enFavoritos;

  constructor(private inAppBrowser: InAppBrowser,
              private actionSheetCtrl: ActionSheetController,
              private socialSharing: SocialSharing,
              private datalocalService: DatalocalService) { }

  ngOnInit() {}

  abrirManga() {
    const browser = this.inAppBrowser.create(
      `https://kitsu.io/manga/${ this.manga.attributes.slug }`,
      '_system'
    );
  }

  async abrirMenu() {
    let btnFavorito;
    if (this.enFavoritos) {
      btnFavorito = {
          text: 'Eliminar de favoritos',
          icon: 'heart-dislike',
          handler: () => {
            console.log('Eliminado de Favoritos');
            this.datalocalService.borrarManga(this.manga);
          }
        };
    } else {
      btnFavorito = {
          text: 'Favorito',
          icon: 'heart',
          handler: () => {
            console.log('Favorito');
            this.datalocalService.guardarManga(this.manga);
          }
        };
    }
    const actionShet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          handler: () => {
            console.log('Compartir');
            this.socialSharing.share(
              this.manga.attributes.titles.en_jp,
              this.manga.attributes.status,
              '',
              `https://kitsu.io/manga/${ this.manga.attributes.slug }`
            );
          }
        },
        btnFavorito,
        {
          text: 'Cancelar',
          icon: 'close',
          handler: () => {
            console.log('Cancelar');
          }
        }
      ]
    });
    await actionShet.present();
  }

}
