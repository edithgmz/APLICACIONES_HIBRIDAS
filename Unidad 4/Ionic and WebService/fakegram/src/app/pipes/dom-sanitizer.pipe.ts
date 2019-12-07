import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer'
})
// Implementa la interfaz que ya tiene todas las funciones de las pipes (tuberías)
export class DomSanitizerPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  transform(img: string): any {
    // Se indica todo lo que se va a implementar
    const domImg = `background-image: url('${{ img }}')`;
    return this.domSanitizer.bypassSecurityTrustStyle(domImg);
  }

}
