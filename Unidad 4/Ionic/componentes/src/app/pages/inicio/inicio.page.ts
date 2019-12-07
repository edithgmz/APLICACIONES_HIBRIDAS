import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss']
})
export class InicioPage implements OnInit {
  private todos: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action-Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'contact',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Button',
      redirectTo: '/button'
    },
    {
      icon: 'card',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon: 'checkbox',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar',
      name: 'Date-Time',
      redirectTo: '/date-time'
    },
    {
      icon: 'add-circle',
      name: 'Floating Action Button',
      redirectTo: '/fab'
    },
    {
      icon: 'apps',
      name: 'Grid, Row y Col',
      redirectTo: '/grid-row-col'
    },
    {
      icon: 'grid',
      name: 'Grid - Control de Anchura',
      redirectTo: '/grid-width'
    },
    {
      icon: 'infinite',
      name: 'Infinite-Scroll',
      redirectTo: '/infinite-scroll'
    },
    {
      icon: 'log-in',
      name: 'Input',
      redirectTo: '/input'
    },
    {
      icon: 'code-download',
      name: 'Item-Sliding',
      redirectTo: '/item-sliding'
    },
    {
      icon: 'list-box',
      name: 'List',
      redirectTo: '/list'
    },
    {
      icon: 'reorder',
      name: 'List-Reorder',
      redirectTo: '/list-reorder'
    },
    {
      icon: 'sync',
      name: 'Loading',
      redirectTo: '/loading'
    },
    {
      icon: 'menu',
      name: 'Menu',
      redirectTo: '/menu'
    },
    {
      icon: 'folder',
      name: 'Modal',
      redirectTo: '/modal'
    },
    {
      icon: 'document',
      name: 'Popover',
      redirectTo: '/popover'
    },
    {
      icon: 'options',
      name: 'Progress Bar y Range',
      redirectTo: '/progress-bar-range'
    },
    {
      icon: 'refresh',
      name: 'Refresher',
      redirectTo: '/refresher'
    },
    {
      icon: 'search',
      name: 'Search Bar',
      redirectTo: '/search-bar'
    },
    {
      icon: 'bookmarks',
      name: 'Segment',
      redirectTo: '/segment'
    },
    {
      icon: 'create',
      name: 'Skeleton-Text',
      redirectTo: '/skeleton-text'
    },
    {
      icon: 'albums',
      name: 'Slides',
      redirectTo: '/slides'
    },
    {
      icon: 'book',
      name: 'Split-Pane',
      redirectTo: '/split-pane'
    },
    {
      icon: 'filing',
      name: 'Tabs',
      redirectTo: '/tabs'
    },
    {
      icon: 'images',
      name: 'Toast',
      redirectTo: '/toast'
    }
  ];

  componentes: Componente[] = [];

  constructor(private menuController: MenuController) {
    this.componentes = this.todos;
  }

  ngOnInit() { }

  openMenu() {
    this.menuController.enable(true, 'menu');
    this.menuController.open('menu');
  }

  onSearchTerm(event: CustomEvent) {
    this.componentes = this.todos;
    const valor = event.detail.value;

    if (valor.trim() !== '') {
      this.componentes = this.componentes.filter(term => {
        return term.name.toLowerCase().indexOf(valor.trim().toLowerCase()) > -1;
      });
    }
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
