import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.page.html',
  styleUrls: ['./modal-content.page.scss']
})
export class ModalContentPage implements OnInit {
  mtitu: string;
  mnom: string;
  maPat: string;
  maMat: string;
  mapodo: string;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {}

  ionViewWillEnter() {
    this.mtitu = this.navParams.get('titu');
    this.mnom = this.navParams.get('nom');
    this.maPat = this.navParams.get('aPat');
    this.maMat = this.navParams.get('aMat');
    this.mapodo = this.navParams.get('apodo');
  }

  async closeModal() {
     const result: string = this.maPat + ' ' + this.maMat + ' ' + this.mnom + ' (' + this.mapodo + ')';
     await this.modalController.dismiss(result);
  }

  ngOnInit() {}
}
