import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss']
})
export class RefresherPage implements OnInit {

  constructor() {}

  doRefresh(event) {
    console.log('Inicio de operación asíncrona.');

    setTimeout(() => {
      console.log('Operación asíncrona finalizada.');
      event.target.complete();
    }, 2000);
  }

  ionPull() {
    console.log('Evento ionPull activado.');
  }
  ionStart() {
    console.log('Evento ionStart activado.');
  }

  ngOnInit() {}
}
