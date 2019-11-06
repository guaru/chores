import { Status } from "./status";
import { Tablero } from "./tablero";
import { User } from "./user";

export class Task {
    constructor(public id?:number,
        public name?:string,
        public enddate? : Date,
        public status?:Status,
        public project?:Tablero,
        public statusId?:number,
        public owneruserId?:number,
        public devuserId?:number,
        public owneruser?:User,
        public devuser?:User,
        public beforeStatusId?:number,
        public projectId?:number,
        public complements?:number
        ){}
}