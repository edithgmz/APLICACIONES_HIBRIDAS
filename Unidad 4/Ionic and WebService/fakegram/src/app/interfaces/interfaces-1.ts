interface RootObject {
  ok1: boolean;
  pagina1: number;
  posts1: Post1[];
}

interface Post1 {
  imgs1: string[];
  _id1: string;
  mensaje1: string;
  usuario1: Usuario1;
  created1: string;
  __v1: number;
  coords?: string;
}

interface Usuario1 {
  avatar1: string;
  _id1: string;
  nombre1: string;
  email1: string;
  __v1: number;
}
