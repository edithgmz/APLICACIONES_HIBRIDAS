import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  posts: Post[] = [];
  habilitado = true;

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.siguientes();
  }

  siguientes(event?, pull: boolean = false) {
    this.postService.getPosts(pull).subscribe(resp => {
      console.log('todos: ', resp);
      // Operador spread (...): cada una de las entradas es un nuevo elemento
      this.posts.push(...resp.posts);
      // Completar el evento: forma 2 -> Permite trabajar con refresher e infinite scroll
      if (resp.posts.length === 0) {
        event.target.disabled = true;
        this.habilitado = false;
      }
      /* Completar el evento: forma 1
      if (event) {
        event.target.complete();
      }*/
    });
  }

  recargar(event) {
    this.siguientes(event, true);
    this.habilitado = true;
    this.posts = [];
  }
}
