import { ClientDto } from "./ClientDto.model"
import { EtatLivraison } from "./enum/etat-livraison"
import { EtatPaiement } from "./enum/etat-paiement"
import { MethodDePaiement } from "./enum/method-de-paiement"

export interface CommandeDto{
    id: number,
    reference: string,
    totalPaye: number,
    dateCommande: Date,
    client: string,
    commandeItemDtos: string,
    methodDePaiement: MethodDePaiement,
    etatLivraison: EtatLivraison
    etatPaiement: EtatPaiement

}