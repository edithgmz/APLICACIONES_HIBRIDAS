import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover-content',
  templateUrl: './popover-content.page.html',
  styleUrls: ['./popover-content.page.scss']
})
export class PopoverContentPage implements OnInit {
  mtitu: string;
  mnom: string;
  maPat: string;
  maMat: string;
  mapodo: string;

  constructor(
    private popoverController: PopoverController,
    private navParams: NavParams
  ) {}

  ionViewWillEnter() {
    this.mtitu = this.navParams.get('titu');
    this.mnom = this.navParams.get('nom');
    this.maPat = this.navParams.get('aPat');
    this.maMat = this.navParams.get('aMat');
    this.mapodo = this.navParams.get('apodo');
  }

  async closePopover() {
    const result: string = this.maPat + ' ' + this.maMat + ' ' + this.mnom + ' (' + this.mapodo + ')';
    await this.popoverController.dismiss(result);
  }

  ngOnInit() {}
}
