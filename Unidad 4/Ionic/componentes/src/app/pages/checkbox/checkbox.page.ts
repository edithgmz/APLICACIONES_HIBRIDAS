import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss']
})
export class CheckboxPage implements OnInit {
  personajes: Personaje[] = [
    {
      name: 'Lan Zhan',
      isChecked: true,
      isDisabled: false
    },
    {
      name: 'Wei Ying',
      isChecked: false,
      isDisabled: false
    },
    {
      name: 'Wang Yibo',
      isChecked: true,
      isDisabled: true
    },
    {
      name: 'Xiao Zhan',
      isChecked: false,
      isDisabled: false
    },
    {
      name: 'Lan Wangji',
      isChecked: false,
      isDisabled: true
    },
    {
      name: 'Wei Wuxian',
      isChecked: false,
      isDisabled: false
    },
    {
      name: 'Hanguang Jun',
      isChecked: true,
      isDisabled: false
    },
    {
      name: 'Yiling Patriarch',
      isChecked: false,
      isDisabled: true
    }
  ];

  constructor() {}

  ngOnInit() {}
}

interface Personaje {
  name: string;
  isChecked: boolean;
  isDisabled: boolean;
}
