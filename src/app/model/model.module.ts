import { NgModule } from "@angular/core";
import { StudentRepository } from "./student.repository";
import { StaticDataSource } from "./static.datasource";
import { Elective } from "./elective.model";
import { ElectiveRepository } from "./elective.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [StudentRepository, StaticDataSource, Elective, ElectiveRepository,
    { provide: StaticDataSource, useClass: RestDataSource }, RestDataSource, AuthService]
  })
  export class ModelModule { }
