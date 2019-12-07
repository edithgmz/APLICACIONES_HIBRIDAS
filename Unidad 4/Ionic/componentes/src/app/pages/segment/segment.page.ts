import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss']
})
export class SegmentPage implements OnInit {
  constructor() {}

  segmentChanged(ev: any) {
    console.log('Cambio de segmento.', ev);
  }

  ngOnInit() {}
}
