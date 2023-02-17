import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { CustomerModel } from '../../interfaces/customer.interface';
import { SignUpModel } from '../../interfaces/singup.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private api = environment.api;

  constructor(private  httpClient:HttpClient) { }


  

  public getAllCustomerById(): Observable <CustomerModel>{

    return this.httpClient.get<CustomerModel>(this.api + "/customer/getCustomerInfo/c0bc2674-83fa-4102-ada9-f9833c823a29" )
   
     }

  public getAllCustomer(): Observable <CustomerModel[]>{

    return this.httpClient.get<CustomerModel[]>(this.api + "/customer/getCustomers" )
   
     }

  public getCustomerById(id:string): Observable<CustomerModel>{

    return this.httpClient.get<CustomerModel>(this.api + "/customer/" + id)
    }


    //
    public registerCustomer (sigUp: SignUpModel): Observable <SignUpModel>{

return this.httpClient.get<SignUpModel>(this.api + "/security/newUser" )
    }

    createUser(user: SignUpModel): Observable<string> {
      return this.httpClient.post(
        this.api + '/security/newUser',
        user,{responseType: 'text'}
      );
    }

    


}
