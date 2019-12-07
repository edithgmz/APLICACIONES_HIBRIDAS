import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss']
})
export class ListReorderPage implements OnInit {
  datos: string[];

  constructor() {
    this.datos = [
      '1. Lan Zhan',
      '2. Lan Wangi',
      '3. Hanguang Jun',
      '4. Wang Yibo',
      '5. Wei Ying',
      '6. Wei Wuxian',
      '7. Yiling Patriarch',
      '8. Xiao Zhan'
    ];
  }

  onRenderItems(event) {
    console.log(`Moviendo item de ${event.detail.from} a ${event.detail.to}`);
    const draggedItem = this.datos.splice(event.detail.from, 1)[0];
    this.datos.splice(event.detail.to, 0, draggedItem);
    event.detail.complete();
  }

  ngOnInit() {}
}
