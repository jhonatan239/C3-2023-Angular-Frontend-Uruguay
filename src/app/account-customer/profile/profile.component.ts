import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { CustomerModel } from '../../interfaces/customer.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../login/services/auth.service';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  customer: CustomerModel | undefined
  customers: CustomerModel[] = [];

  constructor(public customerService: CustomerService, protected auth:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getInfoCust();
  }

  public getInfoCust(): void {
    this.customerService.getAllCustomerById().subscribe({
      next: (Response: CustomerModel) => { this.customer = Response },
      error: (error: HttpErrorResponse) => { alert(error.message) }
    });
  }

  logOut(){
    this.auth.logout()
    .then(() =>{
      this.auth.setStatusVariable(true)
      this.router.navigate(['/SignIn']);
        })
        .catch(error=>console.log(error))
  }

  public getAllCust(): void {
    this.customerService.getAllCustomer().subscribe({
      next: (Response: CustomerModel[]) => { console.log(this.customers = Response) },
      error: (error: HttpErrorResponse) => { alert(error.message) }
    });
  }

  onClickAtras(){

    this.router.navigate(['/account-customer/profile'])
   }
  
  public getAllDeposit():void{


  }




  
  

}
