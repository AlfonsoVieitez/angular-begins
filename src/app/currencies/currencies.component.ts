import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExchangeService } from './exchange.service';

@Component({
  selector: 'a-begins-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css'],
})
export class CurrenciesComponent implements OnInit {
  targetAmounts$: Observable<any[]>;
  constructor(private exchangeService: ExchangeService) {}

  ngOnInit() {}

  convert(sourceAmount: number) {
    this.targetAmounts$ = this.exchangeService.getCurrentExchangeRates$().pipe(
      map((rates: any) => {
        const currencies: string[] = Object.keys(rates);
        const factors: number[] = Object.values(rates);
        const currencyList = [];
        let i = 0;
        currencies.forEach(c => {
          currencyList.push({ currency: c, amount: sourceAmount * factors[i] });
          i++;
        });
        return currencyList;
      })
    );
  }
}
