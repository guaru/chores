import { Task } from "./task";

export class TaskVO{
    constructor(public task?:Task,
                public beforeStatusId?:number){

    }
}