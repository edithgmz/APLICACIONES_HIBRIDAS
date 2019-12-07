import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AnimesComponent } from './animes/animes.component';
import { AnimeComponent } from './anime/anime.component';
import { MangasComponent } from './mangas/mangas.component';
import { MangaComponent } from './manga/manga.component';



@NgModule({
  declarations: [AnimesComponent, AnimeComponent, MangasComponent, MangaComponent],
  exports: [AnimesComponent, MangasComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
