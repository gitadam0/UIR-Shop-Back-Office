import { Warehouse } from "./Warehouse.model";

export interface Stock{
    id:number,
    quantity:number,
    productDto:string,
    warehouseDto:Warehouse
}