import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerModel } from 'src/app/interfaces/customer.interface';
import { AccountModel } from 'src/app/interfaces/account.interface';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { SignInModel } from '../../interfaces/signIn.Interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenModel } from 'src/app/interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient, private auth: Auth) { }

    statusVariable: BehaviorSubject <boolean> = new BehaviorSubject (false);
    currentUser!: CustomerModel;
    helper = new JwtHelperService();


  //crear interface para todo
  get(url: string) {
    return this.http.get<AccountModel>(url)
  }
  signIn( data: SignInModel) {
    return this.http.post<CustomerModel>("http://localhost:3000/security/signin", data)
  }

  signInGoogle( data: SignInModel) {
    return this.http.post<CustomerModel>(" http://localhost:3000/security/SignInGoogle", data)
  }

 

  setStatusVariable(status: boolean){
    this.statusVariable.next(status)
  }

  private _check = false;

  public get check() {
    return this._check;
  }
  public set check(value) {
    this._check = value;
  }


  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle(){
    return signInWithPopup(this.auth,new GoogleAuthProvider());
  }


  logout(){
    return signOut(this.auth);
  }

  decodeValue(token:string){
    const token2 = this.helper.decodeToken<TokenModel>(token)
    if (token2!= null){
      this.currentUser= token2.customer
    }    

  }



}
