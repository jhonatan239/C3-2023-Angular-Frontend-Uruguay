import { CustomerModel } from './customer.interface';
export interface TokenModel {
    customer: CustomerModel;
    iat: number;
}