import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverContentPage } from './popover-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [PopoverContentPage],
  entryComponents: [PopoverContentPage]
})
export class PopoverContentPageModule {}
