import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GitHubService } from "../../services/github.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import 'rxjs/Rx'; //import all operators



@Component({
    selector: 'SearchComponent',
    templateUrl: "./pages/search/search.html",
    providers: [GitHubService],
    styleUrls: ['./pages/search/style.css']

})
export class SearchComponent {

    user: string;
    user$: BehaviorSubject<Array<Object>> = new BehaviorSubject([{}]);
    //public user: string;

    //public UserList$: BehaviorSubject<Array<string>> = new BehaviorSubject([]);
    constructor(private githubService: GitHubService) {
        // this.user.subscribe(res => console.log(res));
    }
    public search(e: any) {
        this.githubService.SearchUsers(e.object.text).subscribe(
            (res) => {
                this.user$.next(res[0].items),
                (error) => {console.log(error)},
                () => {console.log(this.user$['items'])}
            })
    }

}
