import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Student } from "./student.model";
import { Elective } from "./elective.model";
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';


const PROTOCOL = "http";
const PORT = 3500;


@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.baseUrl + "students");
    }
    saveElective(elective: Elective): Observable<Elective> {
        return this.http.post<Elective>(this.baseUrl + "electives", elective);
    }
    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "login", {
            name: user, password: pass
        }).pipe(map(response => {
            this.auth_token = response.success ? response.token : null;
            return response.success;
        }));
    }

    saveStudent(student: Student): Observable<Student> {
        return this.http.post<Student>(this.baseUrl + "students",
            student, this.getOptions());
    }
    updateStudent(student): Observable<Student> {
        return this.http.put<Student>(`${this.baseUrl}students/${student.id}`,
            student, this.getOptions());
    }
    deleteStudent(roll: string): Observable<Student> {
        return this.http.delete<Student>(`${this.baseUrl}students/${roll}`,
            this.getOptions());
    }
    getElectives(): Observable<Elective[]> {
        return this.http.get<Elective[]>(this.baseUrl + "electives", this.getOptions());
    }

    deleteElective(roll: string): Observable<Elective> {
        return this.http.delete<Elective>(`${this.baseUrl}electives/${roll}`,
        this.getOptions());
    }

    updateElective(elective: Elective): Observable<Elective> {
        return this.http.put<Elective>(`${this.baseUrl}electives/${elective.roll}`,
            this.getOptions());
    }
    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer<${this.auth_token}>`
            })
        }
    }
}