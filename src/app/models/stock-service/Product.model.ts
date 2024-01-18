import { Category } from "./Category.model";
import { Stock } from "./Stock.model";

export interface Product{
    id:number,
    reference:string,
    name:string,
    description:string,
    categoryDto:Category,
    stockDtos:Stock[],
}