import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { timer, Observable } from 'rxjs';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  cryptos$: Object;
  lastPrice: Object = {};
  priceClass: Object = {};
  token: string;
  btcPrice: number;

  constructor(private data: DataService) { }

  ngOnInit() {

    // Capture scope
    let cp = this;

    // Initialisation
    chrome.storage.sync.get(['btcPrice'], function(binfo) {
      cp.getBTCPrice(binfo);
    });

    // Delay until chrome storage has been retrieved
    const sourcef = timer(1, 8000).subscribe(x => {
      this.getTheCrypto();
    });
  }

  getTheCrypto() {
    this.data.getCrypto().subscribe( data => {

      if (data !== undefined) {
          console.log(data);

          this.cryptos$ = data['data'].map(x => {
            this.token = x.pair.split(':');
            x.pair = this.token[0];

            if (this.lastPrice[x.pair] > x.last) {
              this.priceClass[x.pair] = 'green';
            } else if (this.lastPrice[x.pair] < x.last) {
              this.priceClass[x.pair] = 'red';
            } else {
              this.priceClass[x.pair] = 'zilch';
            }

            this.lastPrice[x.pair] = x.last;

            return x;
          });
      }

      // this.cryptos$ = data.data;
      // console.log(this.cryptos$);
    });
  }


  fixBTCPrice() {
    alert('Approve this ... ');
    // Set the stored variables
    chrome.storage.sync.set({'btcPrice': 7000}, function() {
      this.btcPrice = 7000;
      alert('Uh oh! You have reached your budget limit.');
    });
  }

  getBTCPrice(binfo) {
      if (binfo.btcPrice) {
        this.btcPrice = binfo.btcPrice;
      }
      console.warn(this.btcPrice);
  }

}

