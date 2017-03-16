"use strict";
var core_1 = require("@angular/core");
var github_service_1 = require("../../services/github.service");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var router_1 = require("@angular/router");
require("rxjs/Rx"); //import all operators
var SearchComponent = (function () {
    //public user: string;
    //public UserList$: BehaviorSubject<Array<string>> = new BehaviorSubject([]);
    function SearchComponent(githubService, router) {
        this.githubService = githubService;
        this.router = router;
        this.isLoading = false;
        this.user$ = new BehaviorSubject_1.BehaviorSubject([{}]);
        // this.user.subscribe(res => console.log(res));
        this.clear();
    }
    SearchComponent.prototype.search = function (e) {
        var _this = this;
        this.isLoading = true;
        this.githubService.SearchUsers(e.object.text).subscribe(function (res) {
            _this.TotalUser = res.TotalCount;
            _this.user$.next(res[0].items);
            _this.isLoading = false;
        });
    };
    SearchComponent.prototype.RoundScore = function (score) {
        if (score) {
            var int = parseInt(score);
            return Math.floor(score);
        }
    };
    SearchComponent.prototype.clear = function () {
        this.user$.next([]);
    };
    SearchComponent.prototype.GetUserUrl = function (UserLogin) {
        var navigationExtras = {
            queryParams: {
                "UserLogin": UserLogin
            }
        };
        this.router.navigate(["/details"], navigationExtras);
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'SearchComponent',
        templateUrl: "./pages/search/search.html",
        providers: [github_service_1.GitHubService],
        styleUrls: ['./pages/search/style.css']
    }),
    __metadata("design:paramtypes", [github_service_1.GitHubService, router_1.Router])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2guY29tcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW1FO0FBQ25FLGdFQUE4RDtBQUM5RCx3REFBdUQ7QUFDdkQsMENBQTJEO0FBQzNELG1CQUFpQixDQUFDLHNCQUFzQjtBQVd4QyxJQUFhLGVBQWU7SUFPeEIsc0JBQXNCO0lBRXRCLDZFQUE2RTtJQUM3RSx5QkFBb0IsYUFBNEIsRUFBVSxNQUFjO1FBQXBELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVB4RSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLFVBQUssR0FBbUMsSUFBSSxpQ0FBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQU05RCxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTSxnQ0FBTSxHQUFiLFVBQWMsQ0FBTTtRQUFwQixpQkFRQztRQVBHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUNuRCxVQUFDLEdBQUc7WUFDQSxLQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDaEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUNNLG9DQUFVLEdBQWpCLFVBQWtCLEtBQUs7UUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0wsQ0FBQztJQUNNLCtCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ00sb0NBQVUsR0FBakIsVUFBa0IsU0FBUztRQUN2QixJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUU7Z0JBQ1QsV0FBVyxFQUFFLFNBQVM7YUFDekI7U0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUF6Q1ksZUFBZTtJQVAzQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7UUFDMUIsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7S0FFMUMsQ0FBQztxQ0FXcUMsOEJBQWEsRUFBa0IsZUFBTTtHQVYvRCxlQUFlLENBeUMzQjtBQXpDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdpdEh1YlNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2l0aHViLnNlcnZpY2VcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICdyeGpzL1J4JzsgLy9pbXBvcnQgYWxsIG9wZXJhdG9yc1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdTZWFyY2hDb21wb25lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvc2VhcmNoL3NlYXJjaC5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbR2l0SHViU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFnZXMvc2VhcmNoL3N0eWxlLmNzcyddXG5cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IHtcblxuICAgIHVzZXI6IHN0cmluZztcbiAgICBpc0xvYWRpbmc6IEJvb2xlYW4gPSBmYWxzZTtcbiAgICBUb3RhbFVzZXI6IHN0cmluZztcbiAgICB1c2VyJDogQmVoYXZpb3JTdWJqZWN0PEFycmF5PE9iamVjdD4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbe31dKTtcblxuICAgIC8vcHVibGljIHVzZXI6IHN0cmluZztcblxuICAgIC8vcHVibGljIFVzZXJMaXN0JDogQmVoYXZpb3JTdWJqZWN0PEFycmF5PHN0cmluZz4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBnaXRodWJTZXJ2aWNlOiBHaXRIdWJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIC8vIHRoaXMudXNlci5zdWJzY3JpYmUocmVzID0+IGNvbnNvbGUubG9nKHJlcykpO1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzZWFyY2goZTogYW55KSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5naXRodWJTZXJ2aWNlLlNlYXJjaFVzZXJzKGUub2JqZWN0LnRleHQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLlRvdGFsVXNlciA9IHJlcy5Ub3RhbENvdW50O1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciQubmV4dChyZXNbMF0uaXRlbXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICBwdWJsaWMgUm91bmRTY29yZShzY29yZSkge1xuICAgICAgICBpZiAoc2NvcmUpIHtcbiAgICAgICAgICAgIHZhciBpbnQgPSBwYXJzZUludChzY29yZSk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihzY29yZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGNsZWFyKCl7XG4gICAgICAgIHRoaXMudXNlciQubmV4dChbXSk7XG4gICAgfVxuICAgIHB1YmxpYyBHZXRVc2VyVXJsKFVzZXJMb2dpbikge1xuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgXCJVc2VyTG9naW5cIjogVXNlckxvZ2luXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9kZXRhaWxzXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgICB9XG5cbn1cbiJdfQ==