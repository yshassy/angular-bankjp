import { Component, OnInit } from '@angular/core';
import { BankjpService } from '../../service/bankjp/bankjp.service';

@Component({
  selector: 'app-bankjp',
  templateUrl: './bankjp.component.html',
  styleUrls: ['./bankjp.component.css']
})
export class BankjpComponent implements OnInit {
  banks;
  selectedBank;
  branches;
  selectedBranch;

  constructor(private bankjpService: BankjpService) {
    this.bankjpService.getBanks()
      .then(
        (response) => {
          this.banks = response;
          console.log(this.banks);
        }
      );
  }

  onBankChange($event) {
    if (!$event) return;
    this.bankjpService.getBranches($event.code)
      .then(
        (response) => {
          this.branches = response;
          console.log(this.branches);
        }
      );
  }

  ngOnInit(): void {
  }

}
