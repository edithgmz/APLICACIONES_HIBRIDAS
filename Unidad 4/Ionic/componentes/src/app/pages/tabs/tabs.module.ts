import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      // Tab1
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tabs/tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: './tab1',
        pathMatch: 'full'
      },
      // Tab2
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tabs/tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: './tab2',
        pathMatch: 'full'
      },
      // Tab3
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tabs/tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: './tab3',
        pathMatch: 'full'
      },
      // Tab3
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: '../tabs/tab4/tab4.module#Tab4PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: './tab4',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
