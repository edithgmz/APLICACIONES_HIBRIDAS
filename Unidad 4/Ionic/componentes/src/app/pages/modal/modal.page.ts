import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalContentPage } from './modal-content/modal-content.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss']
})
export class ModalPage implements OnInit {

  datos: string;

  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: ModalContentPage,
      componentProps: {
        titu: 'Modal',
        nom: 'María Luisa',
        aPat: 'Morales',
        aMat: 'Pérez',
        apodo: 'Malu'
      }
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
    if (detail !== null) {
      this.datos = detail.data;
    }
    });
    return await modal.present();
}

  ngOnInit() {}
}
