import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GitHubService } from "../../services/github.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Router, NavigationExtras } from "@angular/router";
import 'rxjs/Rx'; //import all operators



@Component({
    selector: 'SearchComponent',
    templateUrl: "./pages/search/search.html",
    providers: [GitHubService],
    styleUrls: ['./pages/search/style.css']

})
export class SearchComponent {

    user: string;
    isLoading: Boolean = false;
    TotalUser: string;
    user$: BehaviorSubject<Array<Object>> = new BehaviorSubject([{}]);

    //public user: string;

    //public UserList$: BehaviorSubject<Array<string>> = new BehaviorSubject([]);
    constructor(private githubService: GitHubService, private router: Router) {
        // this.user.subscribe(res => console.log(res));
    }
    public search(e: any) {
        this.isLoading = true;
        this.githubService.SearchUsers(e.object.text).subscribe(
            (res) => {
                this.TotalUser = res.TotalCount;
                this.user$.next(res[0].items);
                this.isLoading = false;
            })
    }
    public RoundScore(score) {
        if (score) {
            var int = parseInt(score);
            return Math.floor(score);
        }
    }
    public clear(){
        this.user$.next([]);
    }
    public GetUserUrl(UserLogin) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "UserLogin": UserLogin
            }
        };
        this.router.navigate(["/details"], navigationExtras);
    }

}
