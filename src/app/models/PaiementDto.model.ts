import { EtatPaiement } from "./enum/etat-paiement.";
import { MethodDePaiement } from "./enum/method-de-paiement";

interface PaiementDto{
    commandeDto : CommandeDto; 
    montant : number;
    etatPaiementDto : EtatPaiement;
    methodDePaiement : MethodDePaiement;  
}