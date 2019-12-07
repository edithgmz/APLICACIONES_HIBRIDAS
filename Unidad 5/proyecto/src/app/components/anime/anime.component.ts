import { Component, OnInit, Input } from '@angular/core';
import { AnimeDatum } from '../../interfaces/interfaces-anime';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DatalocalService } from '../../services/datalocal.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
})
export class AnimeComponent implements OnInit {
  @Input() anime: AnimeDatum;
  @Input() indice: number;
  @Input() enFavoritos;

  constructor(private inAppBrowser: InAppBrowser,
              private actionSheetCtrl: ActionSheetController,
              private socialSharing: SocialSharing,
              private datalocalService: DatalocalService) { }

  ngOnInit() {}

  abrirAnimeTrailer() {
    const browser = this.inAppBrowser.create(
      `https://www.youtube.com/watch?v=${ this.anime.attributes.youtubeVideoId }`,
      '_system'
    );
  }

  abrirAnime() {
    const browser = this.inAppBrowser.create(
      `https://kitsu.io/anime/${ this.anime.attributes.slug }`,
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
            this.datalocalService.borrarAnime(this.anime);
          }
        };
    } else {
      btnFavorito = {
          text: 'Favorito',
          icon: 'heart',
          handler: () => {
            this.datalocalService.guardarAnime(this.anime);
          }
        };
    }
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          handler: () => {
            this.socialSharing.share(
              this.anime.attributes.titles.en_jp,
              this.anime.attributes.status,
              '',
              `https://kitsu.io/anime/${ this.anime.attributes.slug }`
            );
          }
        },
        btnFavorito,
        {
          text: 'Cancelar',
          icon: 'close',
          handler: () => { }
        }
      ]
    });
    await actionSheet.present();
  }

}
