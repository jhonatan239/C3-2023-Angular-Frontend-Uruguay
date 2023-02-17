import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/account-customer/services/customer.service';
import { AuthService } from '../services/auth.service';
import { SignUpModel } from '../../interfaces/singup.interface';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {

  signUp: SignUpModel | undefined
  constructor(
    private router: Router,
    private serviceCom: AuthService,
    private formBuilder: FormBuilder,
    public customerService: CustomerService
    
    //private jwt_decode: jwtDecode
  ) { }
  
  formValue: FormGroup | undefined;

  signUpForm = this.formBuilder.group({
    documentTypeId: new FormControl('',
    { validators: [Validators.required] }),
    document: new FormControl('',
    { validators: [Validators.required] }),
    fullName: new FormControl ('',
    { validators: [Validators.required]}),
    email: new FormControl('',
    { validators: [Validators.required, Validators.email] }),
    phone: new FormControl('',
    { validators: [Validators.required] }),
    password:new  FormControl('',
    { validators: [Validators.required] }),
    accountTypeId: new FormControl('', 
    { validators: [Validators.required] }),
    
  });



 
 // register(document: string, email: string, password: string, fullname: string, phone: string, typeAcc: string, TypeDoc: string) {
   
 register() {
   
  if (this.signUpForm.valid){

    
    console.log(this.signUp)
    this.signUp = {
      documentTypeName: this.signUpForm.controls["documentTypeId"].value!, 
      document: this.signUpForm.controls["document"].value!,
      fullName: this.signUpForm.controls["fullName"].value!,
      email: this.signUpForm.controls["email"].value!,
      phone: this.signUpForm.controls["phone"].value!,
      password: this.signUpForm.controls["password"].value!,
      accountTypeName: this.signUpForm.controls["accountTypeId"].value!, 
    };

    this.customerService.createUser(this.signUp).subscribe({
      next: token => {
        localStorage.setItem('token', token);
        this.serviceCom.decodeValue(token)
      },
      error: err => console.error(err),
      complete: () => {
        this.router.navigate(['/account-customer/profile'])
      },
    });
}
 
  }
   
}
   

/*

 documentTypeId: "64e40ae6-5374-4ac5-8498-1beac191d535",
      document:document,
      fullName: fullname,
      email: email,
      phone: phone,
      password: password,
      accountTypeId: "6bb44742-fd21-4582-878a-efa627b194f8",

*/
   
   
    /*
    this.signUp.fullName == fullname
    this.signUp?.email == email
    this.signUp?.documentTypeName == this.typeDoc
    this.signUp?.accountTypeId == this.typeAcc
    this.signUp?.document == document
    this.signUp?.password == password
    this.signUp?.phone == phone
    
   */
// 
//     this.customerService.registerCustomer().subscribe({
//       next: (Response: CustomerModel) => { this.signUp = Response },
//       error: (error: HttpErrorResponse) => { alert(error.message) }

//     });