import { Address } from "../address/address.dto";

export interface Supplier {
  id?: number;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: Address;
}
