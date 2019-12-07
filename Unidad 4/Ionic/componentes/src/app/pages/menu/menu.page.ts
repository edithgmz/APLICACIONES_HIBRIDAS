import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menuController: MenuController) { }

  openFirst() {
    this.menuController.enable(true, 'first');
    this.menuController.open('first');
  }

  openEnd() {
    this.menuController.enable(true, 'end');
    this.menuController.open('end');
  }

  openCustom() {
    this.menuController.enable(true, 'custom');
    this.menuController.open('custom');
  }

  ngOnInit() {
  }

}
