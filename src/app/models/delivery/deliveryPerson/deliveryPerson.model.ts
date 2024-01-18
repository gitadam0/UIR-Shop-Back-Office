import { DeliveryPersonStatus } from "../enum/deliveryPersonStatus.enum";
export interface DeliveryPerson {
    id: number;
    fullname: string;
    email: string;
    phone: string;
    city: string;
    status: DeliveryPersonStatus;
  }