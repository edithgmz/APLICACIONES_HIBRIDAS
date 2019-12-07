import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss']
})
export class InfiniteScrollPage implements OnInit {

  dato: Datos[];

  @ViewChild(IonInfiniteScroll, { read: IonInfiniteScroll, static: true })
  infiniteScroll: IonInfiniteScroll;

  constructor() {
    this.dato = [];
    for (let i = 0; i < 25; i++) {
      this.dato.push({
        image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
        titu: 'Titulo ' + this.dato.length,
        desc: 'Descripción ' + this.dato.length
      });
    }
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Listo.');
      for (let i = 0; i < 25; i++) {
        this.dato.push({
          image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
          titu: 'Titulo ' + this.dato.length,
          desc: 'Descripción ' + this.dato.length
        });
      }
      event.target.complete();

      if (this.dato.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  ngOnInit() {}
}

interface Datos {
  image: string;
  titu: string;
  desc: string;
}
