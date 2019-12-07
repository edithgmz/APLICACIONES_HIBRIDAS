import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss']
})
export class AlertPage implements OnInit {
  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert 1',
      subHeader: 'Subtítulo',
      message: 'Mensaje.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alert 2',
      subHeader: 'Subtítulo',
      message: 'Mensaje.',
      buttons: ['Guardar', 'Eliminar', 'Cancelar']
    });
    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Alert 3',
      message: '<strong>MENSAJE</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            console.log('Cancelar: blah');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Okay');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Alert 4',
      inputs: [
        {
          name: 'Nombre1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'Nombre2',
          type: 'text',
          id: 'name2-id',
          value: 'Hola',
          placeholder: 'Placeholder 2'
        },
        {
          name: 'Nombre3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Placeholder 3'
        },
        // input date with min & max
        {
          name: 'Nombre4',
          type: 'date',
          min: '2017-03-01',
          max: '2019-01-12'
        },
        // input date without min nor max
        {
          name: 'Nombre5',
          type: 'date'
        },
        {
          name: 'Nombre6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'Nombre7',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Ok');
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnInit() {}
}
