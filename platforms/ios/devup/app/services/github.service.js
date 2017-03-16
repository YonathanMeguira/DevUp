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
        var usrInfo = [];
        var FullURL = this.DetailUrl + user;
        return this.http.get(FullURL)
            .map(function (res) {
            var user = res.json();
            usrInfo.push(user);
            console.log(usrInfo);
            return usrInfo || [];
        });
    };
    return GitHubService;
}());
GitHubService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GitHubService);
exports.GitHubService = GitHubService;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnaXRodWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RTtBQUV4RSxpQ0FBK0I7QUFJL0IsSUFBYSxhQUFhO0lBS3RCLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUd0QixjQUFTLEdBQUcsd0NBQXdDLENBQUM7UUFDckQsY0FBUyxHQUFHLCtCQUErQixDQUFDO0lBSmxCLENBQUM7SUFNbkMsbUNBQVcsR0FBWCxVQUFZLElBQUk7UUFDWixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxVQUFDLEdBQUc7WUFDTCxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBRVYsQ0FBQztJQUNELGdDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWpCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDeEIsR0FBRyxDQUFDLFVBQUMsR0FBRztZQUNMLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBcENZLGFBQWE7SUFGekIsaUJBQVUsRUFBRTtxQ0FPaUIsV0FBSTtHQUxyQixhQUFhLENBb0N6QjtBQXBDWSxzQ0FBYTtBQW9DekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBHaXRIdWJTZXJ2aWNlIHtcblxuXG4gICAgVXNlckxvZ2luOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG5cbiAgICBwcml2YXRlIFNlYXJjaFVybCA9IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT1cIjtcbiAgICBwcml2YXRlIERldGFpbFVybCA9IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9cIjtcblxuICAgIFNlYXJjaFVzZXJzKHVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICB2YXIgdXNyID0gW107XG4gICAgICAgIHZhciBGdWxsVVJMID0gdGhpcy5TZWFyY2hVcmwgKyB1c2VyO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChGdWxsVVJMKVxuICAgICAgICAgICAgLm1hcCgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJzID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICB1c3IucHVzaCh1c2Vycyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNyIHx8IFtdO1xuICAgICAgICAgICAgfSlcblxuICAgIH1cbiAgICBWaWV3VXNlcih1c2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgdmFyIHVzckluZm8gPSBbXTtcblxuICAgICAgICB2YXIgRnVsbFVSTCA9IHRoaXMuRGV0YWlsVXJsICsgdXNlcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoRnVsbFVSTClcbiAgICAgICAgICAgIC5tYXAoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICB1c3JJbmZvLnB1c2godXNlcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNySW5mbyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzckluZm8gfHwgW107XG4gICAgICAgICAgICB9KVxuICAgIH1cblxufTsiXX0=