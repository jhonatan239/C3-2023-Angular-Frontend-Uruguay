import { Component } from '@angular/core';
import { DepositService } from '../Services/deposit.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DepositModel } from '../../interfaces/deposit.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-deposit',
  templateUrl: './new-deposit.component.html',
  styleUrls: ['./new-deposit.component.scss']
})
export class NewDepositComponent {

constructor( private depServ: DepositService, private formBuil:FormBuilder, private router:Router){

}


depFormCust = this.formBuil.group({
   account_id: new FormControl('', Validators.required),
   amount: new FormControl ('', Validators.required)
 });

 createDeposit(){
   if(this.depFormCust.controls.account_id.value && this.depFormCust.controls.amount.value){
       let form: DepositModel = {
         account_id: this.depFormCust.controls.account_id.value,
         amount: + this.depFormCust.controls.amount.value 
       }
       this.depServ.addDeposit(form).subscribe(data => {console.log(data)})
   }
 }

 onClickAtras(){

  this.router.navigate(['/account-customer/profile'])
 }

}
