import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPage } from './modal.page';
import { ComponentsModule } from '../../components/components.module';
import { ModalContentPageModule } from './modal-content/modal-content.module';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ModalContentPageModule
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
