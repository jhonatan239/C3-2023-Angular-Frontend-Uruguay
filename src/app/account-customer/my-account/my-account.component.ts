import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { AccountModel } from '../../interfaces/account.interface';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit{


constructor(private servAccount: AccountService){
}

accounts!: AccountModel[]


ngOnInit(){
  this.servAccount.findAccountByCustmoer().subscribe({
    next: data=> this.accounts=data,
    complete: () => console.log(this.accounts)
  })
}

}
