import { Category } from "./Category.model";
import { Supplier } from "./Supplier.model";

export interface Product {
	idProduct: number;
	nomProduct: string;
	description: string;
	reference: string;
	prixProduct: number;
	categoryID: number;
	supplierID: number;
    //TODO redifine the type of the following attributes
	etiquettes?: any[];
	varieties?: any[];
	imgs?: any[];
	colors?: any[];
}
