import { Component, Input } from '@angular/core';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  @Input() transaction!: Transaction;

// Record<> es una utilidad de tipo genérico en TypeScript que se utiliza para definir un tipo de dato
// que representa un objeto con claves (keys) de un determinado tipo y valores (values) de otro determinado tipo.
  dateStyles: Record<string, string> = {
    "margin-top": ".2rem"
  };

  // Se ejecuta al momento de inicializar el componente
  ngOnInit() {
    // Se agrega una propiedad al objeto `dateStyles`
    this.dateStyles['border-bottom'] =
    // Se le asigna un valor a la propiedad basado en una condidión
    this.transaction?.type === 'expense' ?
      "1px solid red" : "1px solid green";
  };

  removeTransaction = () => {
    console.log(`Transaction ${this.transaction.id} clicked`);
  };
}
