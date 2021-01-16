import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankjpService {

  constructor(private http: HttpClient) { }

  public getBanks(): Promise<any> {
    return this.http.get('https://bank.teraren.com/banks.json')
      .toPromise()
      .then((res) => {
        return res;
      })
  }

  getBranches(bankcode: string): Promise<any> {
    return this.http.get('https://bank.teraren.com/banks/' + bankcode + '/branches.json')
      .toPromise()
      .then((res) => {
        return res;
      })
  }

}
