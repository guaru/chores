import { Task } from "./task";

export class TaskComment{
    constructor(public id?:number,
                public description?:string,
                public createdate?:Date,
                public taskId?:number,
                public task?:Task){

    }
}