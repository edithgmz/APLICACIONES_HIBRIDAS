import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverContentPage } from './popover-content/popover-content.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss']
})
export class PopoverPage implements OnInit {
  datos: string;
  datosPosition: string;

  constructor(public popoverController: PopoverController) {}

  async presentPopover() {
    const popover: HTMLIonPopoverElement = await this.popoverController.create({
      component: PopoverContentPage,
      translucent: true,
      componentProps: {
        titu: 'Popover',
        nom: 'María Luisa',
        aPat: 'Morales',
        aMat: 'Pérez',
        apodo: 'Malu'
      }
    });
    popover.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        this.datos = detail.data;
      }
    });
    return await popover.present();
  }

  async presentPopoverPosition(ev: any) {
    const popover: HTMLIonPopoverElement = await this.popoverController.create({
      component: PopoverContentPage,
      event: ev,
      translucent: true,
      componentProps: {
        titu: 'Popover',
        nom: 'María Luisa',
        aPat: 'Morales',
        aMat: 'Pérez',
        apodo: 'Malu'
      }
    });
    popover.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        this.datosPosition = detail.data;
      }
    });
    return await popover.present();
  }

  ngOnInit() {}
}
