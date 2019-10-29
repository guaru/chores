import { Status } from "./status";

export class Tablero {
    id: number;
    name: string;
    priority:number;
    description:string;
    deliverydate:Date;
    statuses?:Status[];
}
