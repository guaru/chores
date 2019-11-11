import { Task } from "./task";

export class TaskFile{
    constructor(public id?:number,
                public namefile?:string,
                public pathfile?:string,
                public createdate?:Date,
                public taskId?:number,
                public task?:Task){

    }
}