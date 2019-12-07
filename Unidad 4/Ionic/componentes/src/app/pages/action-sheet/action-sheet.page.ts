import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss']
})
export class ActionSheetPage implements OnInit {
  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Action Sheet',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Eliminar presionado');
          }
        },
        {
          text: 'Compartir',
          icon: 'share',
          handler: () => {
            console.log('Compartir presionado');
          }
        },
        {
          text: 'Reproducir',
          icon: 'arrow-dropright-circle',
          handler: () => {
            console.log('Reproducir presionado');
          }
        },
        {
          text: 'Favorito',
          icon: 'heart',
          handler: () => {
            console.log('Favorito presionado');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar presionado');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  ngOnInit() {}
}
