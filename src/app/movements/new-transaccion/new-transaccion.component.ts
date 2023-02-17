import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TransferService } from '../../administrator/services/transfer.service';
import { TransferModel } from '../../interfaces/transfer.interface';
import { TransaccionsService } from '../Services/transaccions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transaccion',
  templateUrl: './new-transaccion.component.html',
  styleUrls: ['./new-transaccion.component.scss']
})
export class NewTransaccionComponent {
constructor(private formBuil: FormBuilder, private transferServ:TransaccionsService, private router:Router){

}

transFormBuil = this.formBuil.group({
  account_in: new FormControl('', Validators.required),
  account_out: new FormControl('', Validators.required),
  amount: new FormControl ('', Validators.required),
  reason: new FormControl ('', Validators.required)
});


createTransfer(){

  if(this.transFormBuil.controls.account_in.value && this.transFormBuil.controls.amount.value){
    let form: TransferModel = {
      income_id: this.transFormBuil.controls.account_in.value,
      outcome_id: this.transFormBuil.controls.account_out.value!,
      amount: + this.transFormBuil.controls.amount.value,
      reason: this.transFormBuil.controls.reason.value!,
    }
    this.transferServ.addTransfer(form).subscribe(data => {console.log(data)})
}

}

onClickAtras(){

  this.router.navigate(['/account-customer/profile'])
 }
// outcome_id: string;
// income_id: string;
// amount: number;
// reason: string;

}
