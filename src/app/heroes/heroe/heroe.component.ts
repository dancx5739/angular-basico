import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'Ironman';
    edad: number = 45;

    // getter AZUL
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    // metodo o funcion MORADO
    obtenerNombre(): string {
        // alt + 96(teclado numérico) para hacer ``
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }

}