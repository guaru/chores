import { Tablero } from "./tablero";
import { Color } from "./color";
import { Task } from "./task";

export class Status{
 constructor( public  id?:number,
    public color?:Color,
    public name?: string,
    public project?:Tablero,
    public tasks? : Task[]
    ){}
}