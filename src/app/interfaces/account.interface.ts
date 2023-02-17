import { CustomerModel } from "./customer.interface";

export interface AccountModel {
   
    id: string;
    customer_id: CustomerModel;
    account_type_id: AccountTypeInterface;
    balance: number;
    state: boolean;
    deletedAt?: number | Date;
}

export interface AccountTypeInterface {    
    id: string;
    name: string;
    state: boolean;
}
