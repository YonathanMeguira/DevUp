import { Component } from '@angular/core';
import { GitHubService } from "../../services/github.service";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
var utilityModule = require("utils/utils");
import * as email from "nativescript-email";


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
  public OpenUrl(url) {
    utilityModule.openUrl(url);
  }
  public SendEmail() {
     email.compose({
      subject: "Yo",
      body: "Hello <strong>dude</strong> :)",
      to: ['eddyverbruggen@gmail.com', 'to@person2.com'],
      cc: ['ccperson@somewhere.com'],
      bcc: ['eddy@combidesk.com', 'eddy@x-services.nl'],
      appPickerTitle: 'Compose with..' 
  }).then(
    function() {
      console.log("Email composer closed");
    }, function(err) {
      console.log("Error: " + err);
    });
  }

}

