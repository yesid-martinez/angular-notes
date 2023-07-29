import { Component } from '@angular/core';
import { Balance } from './models/balance.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  balance: Balance = {
    amount: 123_000,
    income: 53_00,
    expenses: 52_000,
  };
}
