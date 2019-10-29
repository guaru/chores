import { User } from "./user";

export class ProjectUser{
    constructor(
        public id?:number,
        public projectId?:number,
        public userId?:number,
        public users?:User[]
    ){}
}