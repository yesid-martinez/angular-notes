import { Component, Input } from '@angular/core';
import  { Balance } from '../../models/balance.model';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {
  // Declaración de variable simple
  title = "Balance title";

  // @Input(): Establece una propiedad de un componente como una propiedad de entrada
  // Puede recibir valores desde el componente padre
  @Input() inputTitle: string = "";

  @Input() balance!: Balance;

}
