"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var GitHubService = (function () {
    function GitHubService(http) {
        this.http = http;
        this.SearchUrl = "https://api.github.com/search/users?q=";
        this.DetailUrl = "https://api.github.com/users/";
    }
    GitHubService.prototype.SearchUsers = function (user) {
        var usr = [];
        var FullURL = this.SearchUrl + user;
        return this.http.get(FullURL)
            .map(function (res) {
            var users = res.json();
            usr.push(users);
            console.log(usr);
            return usr || [];
        });
    };
    GitHubService.prototype.ViewUser = function (user) {
        console.log("inside the func that is about to load contacts from github");
        var FullURL = this.DetailUrl + user;
        return this.http.get(FullURL)
            .map(function (res) { return res.json(); });
    };
    return GitHubService;
}());
GitHubService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GitHubService);
exports.GitHubService = GitHubService;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnaXRodWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RTtBQUV4RSxpQ0FBK0I7QUFJL0IsSUFBYSxhQUFhO0lBRXRCLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUd0QixjQUFTLEdBQUcsd0NBQXdDLENBQUM7UUFDckQsY0FBUyxHQUFHLCtCQUErQixDQUFDO0lBSmxCLENBQUM7SUFNbkMsbUNBQVcsR0FBWCxVQUFZLElBQUk7UUFDWixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxVQUFDLEdBQUc7WUFDTCxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBRVYsQ0FBQztJQUNELGdDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0REFBNEQsQ0FBQyxDQUFBO1FBQ3pFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDeEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksYUFBYTtJQUZ6QixpQkFBVSxFQUFFO3FDQUlpQixXQUFJO0dBRnJCLGFBQWEsQ0EwQnpCO0FBMUJZLHNDQUFhO0FBMEJ6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEdpdEh1YlNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuXG4gICAgcHJpdmF0ZSBTZWFyY2hVcmwgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3VzZXJzP3E9XCI7XG4gICAgcHJpdmF0ZSBEZXRhaWxVcmwgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvXCI7XG4gICAgXG4gICAgU2VhcmNoVXNlcnModXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHZhciB1c3IgPSBbXTtcbiAgICAgICAgdmFyIEZ1bGxVUkwgPSB0aGlzLlNlYXJjaFVybCArIHVzZXI7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEZ1bGxVUkwpXG4gICAgICAgICAgICAubWFwKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlcnMgPSByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgIHVzci5wdXNoKHVzZXJzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c3IgfHwgW107XG4gICAgICAgICAgICB9KVxuXG4gICAgfVxuICAgIFZpZXdVc2VyKHVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluc2lkZSB0aGUgZnVuYyB0aGF0IGlzIGFib3V0IHRvIGxvYWQgY29udGFjdHMgZnJvbSBnaXRodWJcIilcbiAgICAgICAgdmFyIEZ1bGxVUkwgPSB0aGlzLkRldGFpbFVybCArIHVzZXI7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEZ1bGxVUkwpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG59OyJdfQ==