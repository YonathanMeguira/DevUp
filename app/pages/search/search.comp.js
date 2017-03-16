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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2guY29tcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW1FO0FBQ25FLGdFQUE4RDtBQUM5RCx3REFBdUQ7QUFDdkQsMENBQTJEO0FBQzNELG1CQUFpQixDQUFDLHNCQUFzQjtBQVd4QyxJQUFhLGVBQWU7SUFPeEIsc0JBQXNCO0lBRXRCLDZFQUE2RTtJQUM3RSx5QkFBb0IsYUFBNEIsRUFBVSxNQUFjO1FBQXBELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVB4RSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLFVBQUssR0FBbUMsSUFBSSxpQ0FBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQU05RCxnREFBZ0Q7SUFDcEQsQ0FBQztJQUNNLGdDQUFNLEdBQWIsVUFBYyxDQUFNO1FBQXBCLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ25ELFVBQUMsR0FBRztZQUNBLEtBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNoQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBQ00sb0NBQVUsR0FBakIsVUFBa0IsS0FBSztRQUNuQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUM7SUFDTCxDQUFDO0lBQ00sK0JBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDTSxvQ0FBVSxHQUFqQixVQUFrQixTQUFTO1FBQ3ZCLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3JDLFdBQVcsRUFBRTtnQkFDVCxXQUFXLEVBQUUsU0FBUzthQUN6QjtTQUNKLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXhDWSxlQUFlO0lBUDNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztRQUMxQixTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztLQUUxQyxDQUFDO3FDQVdxQyw4QkFBYSxFQUFrQixlQUFNO0dBVi9ELGVBQWUsQ0F3QzNCO0FBeENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2l0SHViU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9naXRodWIuc2VydmljZVwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgJ3J4anMvUngnOyAvL2ltcG9ydCBhbGwgb3BlcmF0b3JzXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ1NlYXJjaENvbXBvbmVudCcsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9zZWFyY2gvc2VhcmNoLmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtHaXRIdWJTZXJ2aWNlXSxcbiAgICBzdHlsZVVybHM6IFsnLi9wYWdlcy9zZWFyY2gvc3R5bGUuY3NzJ11cblxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQge1xuXG4gICAgdXNlcjogc3RyaW5nO1xuICAgIGlzTG9hZGluZzogQm9vbGVhbiA9IGZhbHNlO1xuICAgIFRvdGFsVXNlcjogc3RyaW5nO1xuICAgIHVzZXIkOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8T2JqZWN0Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFt7fV0pO1xuXG4gICAgLy9wdWJsaWMgdXNlcjogc3RyaW5nO1xuXG4gICAgLy9wdWJsaWMgVXNlckxpc3QkOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8c3RyaW5nPj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdpdGh1YlNlcnZpY2U6IEdpdEh1YlNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgLy8gdGhpcy51c2VyLnN1YnNjcmliZShyZXMgPT4gY29uc29sZS5sb2cocmVzKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzZWFyY2goZTogYW55KSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5naXRodWJTZXJ2aWNlLlNlYXJjaFVzZXJzKGUub2JqZWN0LnRleHQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLlRvdGFsVXNlciA9IHJlcy5Ub3RhbENvdW50O1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciQubmV4dChyZXNbMF0uaXRlbXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICBwdWJsaWMgUm91bmRTY29yZShzY29yZSkge1xuICAgICAgICBpZiAoc2NvcmUpIHtcbiAgICAgICAgICAgIHZhciBpbnQgPSBwYXJzZUludChzY29yZSk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihzY29yZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGNsZWFyKCl7XG4gICAgICAgIHRoaXMudXNlciQubmV4dChbXSk7XG4gICAgfVxuICAgIHB1YmxpYyBHZXRVc2VyVXJsKFVzZXJMb2dpbikge1xuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgXCJVc2VyTG9naW5cIjogVXNlckxvZ2luXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9kZXRhaWxzXCJdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgICB9XG5cbn1cbiJdfQ==