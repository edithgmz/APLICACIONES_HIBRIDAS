import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss']
})
export class ToastPage implements OnInit {
  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Configuración guardada.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast',
      message: 'Clic para cerrar.',
      position: 'middle',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorito',
          handler: () => {
            console.log('Clic: Favorito');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Clic: Cancelar');
          }
        }
      ]
    });
    toast.present();
  }

  ngOnInit() {}
}
