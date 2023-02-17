

export interface CustomerModel {
   
  id: string;
  documentType: DocumentTypeModel;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  avatarUrl?: string;
  state: boolean;
  daletedAt?: Date | number;
    token: string;
  }
  
  export interface DocumentTypeModel {
    id: string;
    name: string;
    state: boolean;
  }