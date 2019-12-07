import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss']
})
export class LoadingPage implements OnInit {
  constructor(public loadingController: LoadingController) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 4000
    });
    await loading.present();

    // const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed.');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      duration: 5000,
      message: 'Por favor espera...',
      translucent: true,
      cssClass: 'custom-loading'
    });
    return await loading.present();
  }

  ngOnInit() {}
}
