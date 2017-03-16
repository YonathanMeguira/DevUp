import { Component } from '@angular/core';
import { GitHubService } from "../../services/github.service";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs/BehaviorSubject";


@Component({
  selector: 'DetailsComponent',
  templateUrl: "./pages/details/details.html",
  providers: [GitHubService],
  styleUrls: ['./pages/details/style.css']
})
export class DetailsComponent {

  public UserLogin: string;
  userInfo$: BehaviorSubject<Array<Object>> = new BehaviorSubject([{}]);


  public constructor(private route: ActivatedRoute, private githubService: GitHubService) {
    this.route.queryParams.subscribe(params => {
      this.UserLogin = params["UserLogin"];
      this.githubService.ViewUser(this.UserLogin).subscribe(
        (res) => {
          this.userInfo$.next(res[0]);
          this.userInfo$ = this.userInfo$["_value"];
          console.log(JSON.stringify(this.userInfo$));

        });
    });
  }

}

