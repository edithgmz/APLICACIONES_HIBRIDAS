import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
  { path: 'button', loadChildren: './pages/button/button.module#ButtonPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'checkbox', loadChildren: './pages/checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'date-time', loadChildren: './pages/date-time/date-time.module#DateTimePageModule' },
  { path: 'fab', loadChildren: './pages/fab/fab.module#FabPageModule' },
  { path: 'grid-row-col', loadChildren: './pages/grid-row-col/grid-row-col.module#GridRowColPageModule' },
  { path: 'grid-width', loadChildren: './pages/grid-width/grid-width.module#GridWidthPageModule' },
  { path: 'infinite-scroll', loadChildren: './pages/infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' },
  { path: 'input', loadChildren: './pages/input/input.module#InputPageModule' },
  { path: 'item-sliding', loadChildren: './pages/item-sliding/item-sliding.module#ItemSlidingPageModule' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'list-reorder', loadChildren: './pages/list-reorder/list-reorder.module#ListReorderPageModule' },
  { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
  { path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' },
  { path: 'popover', loadChildren: './pages/popover/popover.module#PopoverPageModule' },
  { path: 'progress-bar-range', loadChildren: './pages/progress-bar-range/progress-bar-range.module#ProgressBarRangePageModule' },
  { path: 'refresher', loadChildren: './pages/refresher/refresher.module#RefresherPageModule' },
  { path: 'segment', loadChildren: './pages/segment/segment.module#SegmentPageModule' },
  { path: 'skeleton-text', loadChildren: './pages/skeleton-text/skeleton-text.module#SkeletonTextPageModule' },
  { path: 'slides', loadChildren: './pages/slides/slides.module#SlidesPageModule' },
  { path: 'split-pane', loadChildren: './pages/split-pane/split-pane.module#SplitPanePageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'toast', loadChildren: './pages/toast/toast.module#ToastPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'search-bar', loadChildren: './pages/search-bar/search-bar.module#SearchBarPageModule' },
  { path: 'tab1', loadChildren: './pages/tabs/tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './pages/tabs/tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './pages/tabs/tab3/tab3.module#Tab3PageModule' },
  { path: 'tab4', loadChildren: './pages/tabs/tab4/tab4.module#Tab4PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
