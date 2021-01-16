import { Component, OnInit, Input } from '@angular/core';
import { BankjpService } from '../../service/bankjp/bankjp.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bankjp',
  templateUrl: './bankjp.component.html',
  styleUrls: ['./bankjp.component.css']
})
export class BankjpComponent implements OnInit {
  @Input() parentForm: FormGroup;
  banks;
  branches;

  constructor(private bankjpService: BankjpService) {
    this.bankjpService.getBanks()
      .then(
        (response) => {
          this.banks = response;
        }
      );
  }

  onBankChange($event) {
    if (!$event) return;
    this.bankjpService.getBranches($event.code)
      .then(
        (response) => {
          this.branches = response;
        }
      );
  }

  ngOnInit(): void {
  }

}
