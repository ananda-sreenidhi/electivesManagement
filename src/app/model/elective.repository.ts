import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Elective } from "./elective.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ElectiveRepository {
    private electives: Elective[] = [];

    constructor(private dataSource: RestDataSource) {}

    getElectives(): Elective[] {
        return this.electives;
    }

    saveElective(elective: Elective): Observable<Elective> {
        return this.dataSource.saveElective(elective);
    }

    updateElective(elective: Elective) {
        this.dataSource.updateElective(elective).subscribe(elective => {
            this.electives.splice(this.electives.
            findIndex(o => o.roll == elective.roll), 1, elective);
        });
    }
}