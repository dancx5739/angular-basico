import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        //Componentes
        ContadorComponent
    ],
    exports: [
        //Componentes
        ContadorComponent
    ],
    imports: [
        //Modulos
    ]
    
})

export class ContadorModule {}