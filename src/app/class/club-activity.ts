import { Departement } from "./departement";

export class ClubActivity {
    constructor(
       public id: number,
       public name: String,
       public picture: String,
       public date: Date,
       public NombreDeParticipants: number,
       public interne: boolean
    ) {}
   }