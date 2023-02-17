import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountModel } from '../../interfaces/account.interface';
import { environment } from 'src/environment/environment';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../../login/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private api = environment.api;
  constructor(
private readonly httpClient:HttpClient,
private auth: AuthService
  ) { }

listAccount(){

return this.httpClient.get('http://localhost:3000/api/')
  
}

findAccountByCustmoer(): Observable<AccountModel[]>{
    return this.httpClient.get<AccountModel[]>(this.api + "/account/get-account-by-customer-id/" + this.auth.currentUser.id  )
}



}
