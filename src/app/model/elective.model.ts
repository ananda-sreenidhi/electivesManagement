import { Injectable } from "@angular/core";
import { Student } from "./student.model";

@Injectable()
export class Elective {
    public roll?: string;
    public e1?: string;
    public e2?: string;
    public allotted?: boolean;
}