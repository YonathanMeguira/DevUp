import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()

export class GitHubService {

    constructor(private http: Http) { }


    private SearchUrl = "https://api.github.com/search/users?q=";
    private DetailUrl = "https://api.github.com/users/";
    
    SearchUsers(user): Observable<any> {
        var usr = [];
        var FullURL = this.SearchUrl + user;
        return this.http.get(FullURL)
            .map((res) => {
                let users = res.json();
                usr.push(users);
                console.log(usr);
                return usr || [];
            })

    }
    ViewUser(user): Observable<any> {
        console.log("inside the func that is about to load contacts from github")
        var FullURL = this.DetailUrl + user;
        return this.http.get(FullURL)
            .map(res => res.json());
    }
};