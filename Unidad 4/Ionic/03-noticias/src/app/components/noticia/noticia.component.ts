import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActionSheetController } from '@ionic/angular';
import { DatalocalService } from '../../services/datalocal.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number;
  @Input() enFavoritos;

  constructor(private iab: InAppBrowser,
              private actionSheetCtrl: ActionSheetController,
              private socialSharing: SocialSharing,
              private datalocalService: DatalocalService) {}

  ngOnInit() {}

  abrirNoticia() {
    // Con estilos del sistema
    const browser = this.iab.create(this.noticia.url, '_system');
    console.log('noticia: ', this.noticia.url);
  }

  async lanzarMenu() {
    let guardarBorrarBtn;
    if(this.enFavoritos) {
      guardarBorrarBtn = {
          text: 'Eliminar favorito',
          icon: 'trash',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Eliminar Favorito');
            this.datalocalService.borrarNoticia(this.noticia);
          }
        };
    } else {
      guardarBorrarBtn = {
          text: 'Favorito',
          icon: 'star',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Favorito');
            this.datalocalService.guardarNoticia(this.noticia);
          }
        };
    }
    const actionShet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Compartir');
            this.socialSharing.share(
              this.noticia.title,
              this.noticia.source.name,
              '',
              this.noticia.url
            );
          }
        },
        guardarBorrarBtn,
        {
          text: 'Cancelar',
          icon: 'close',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Cancelar');
          }
        }
      ]
    });
    await actionShet.present();
  }
}
