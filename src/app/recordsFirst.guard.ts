import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from "@angular/router";
import { RecordsComponent } from "./records/records.component";

@Injectable()
export class RecordsFirstGuard {
    private firstNavigation = true;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != RecordsComponent) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}
