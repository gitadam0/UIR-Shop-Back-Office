import { DeliveryPersonStatus } from "./enum/deliveryPersonStatus.enum";
import { DeliveryPerson } from "./deliveryPerson/deliveryPerson.model";
import { OrderStatus } from "./enum/deliveryStatus.enum";
import { MethodDePaiement } from "./enum/methodeDePaiment.enum";
import { EtatPaiement } from "./enum/etatPaiment.enum";
export interface OrderForm {
    id: number;
    totalPaye: number;
    client: string;
    commandItems: string;
    deliveryPerson: DeliveryPerson;
    status: OrderStatus;
    methodDePaiement: MethodDePaiement;
    etatPaiement: EtatPaiement;
  }