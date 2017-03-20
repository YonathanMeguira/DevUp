"use strict";
var core_1 = require("@angular/core");
var github_service_1 = require("../../services/github.service");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var router_1 = require("@angular/router");
require("rxjs/Rx"); //import all operators
var dialogs = require("ui/dialogs");
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
    SearchComponent.prototype.OpenFilterOptions = function () {
        var options = {
            title: "Search Options",
            message: "What are you searching",
            cancelButtonText: "Cancel",
            actions: ["Users By Location", "Users By Location and Language", "Users By Login"]
        };
        dialogs.action(options).then(function (result) {
            console.log(result);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2guY29tcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW1FO0FBQ25FLGdFQUE4RDtBQUM5RCx3REFBdUQ7QUFDdkQsMENBQTJEO0FBQzNELG1CQUFpQixDQUFDLHNCQUFzQjtBQUN4QyxvQ0FBc0M7QUFXdEMsSUFBYSxlQUFlO0lBT3hCLHNCQUFzQjtJQUV0Qiw2RUFBNkU7SUFDN0UseUJBQW9CLGFBQTRCLEVBQVUsTUFBYztRQUFwRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFQeEUsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixVQUFLLEdBQW1DLElBQUksaUNBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFNOUQsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ00sZ0NBQU0sR0FBYixVQUFjLENBQU07UUFBcEIsaUJBUUM7UUFQRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDbkQsVUFBQyxHQUFHO1lBQ0EsS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFDTSxvQ0FBVSxHQUFqQixVQUFrQixLQUFLO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUM7SUFDTSwrQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNNLG9DQUFVLEdBQWpCLFVBQWtCLFNBQVM7UUFDdkIsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDckMsV0FBVyxFQUFFO2dCQUNULFdBQVcsRUFBRSxTQUFTO2FBQ3pCO1NBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0sMkNBQWlCLEdBQXhCO1FBQ0ksSUFBSSxPQUFPLEdBQUc7WUFDVixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLE9BQU8sRUFBRSx3QkFBd0I7WUFDakMsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxnQ0FBZ0MsRUFBRSxnQkFBZ0IsQ0FBQztTQUNyRixDQUFDO1FBQ0YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBcERELElBb0RDO0FBcERZLGVBQWU7SUFQM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQzFCLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO0tBRTFDLENBQUM7cUNBV3FDLDhCQUFhLEVBQWtCLGVBQU07R0FWL0QsZUFBZSxDQW9EM0I7QUFwRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHaXRIdWJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dpdGh1Yi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAncnhqcy9SeCc7IC8vaW1wb3J0IGFsbCBvcGVyYXRvcnNcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnU2VhcmNoQ29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3NlYXJjaC9zZWFyY2guaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW0dpdEh1YlNlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogWycuL3BhZ2VzL3NlYXJjaC9zdHlsZS5jc3MnXVxuXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCB7XG5cbiAgICB1c2VyOiBzdHJpbmc7XG4gICAgaXNMb2FkaW5nOiBCb29sZWFuID0gZmFsc2U7XG4gICAgVG90YWxVc2VyOiBzdHJpbmc7XG4gICAgdXNlciQ6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxPYmplY3Q+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW3t9XSk7XG5cbiAgICAvL3B1YmxpYyB1c2VyOiBzdHJpbmc7XG5cbiAgICAvL3B1YmxpYyBVc2VyTGlzdCQ6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxzdHJpbmc+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2l0aHViU2VydmljZTogR2l0SHViU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICAvLyB0aGlzLnVzZXIuc3Vic2NyaWJlKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKTtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cbiAgICBwdWJsaWMgc2VhcmNoKGU6IGFueSkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2l0aHViU2VydmljZS5TZWFyY2hVc2VycyhlLm9iamVjdC50ZXh0KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5Ub3RhbFVzZXIgPSByZXMuVG90YWxDb3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIkLm5leHQocmVzWzBdLml0ZW1zKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgcHVibGljIFJvdW5kU2NvcmUoc2NvcmUpIHtcbiAgICAgICAgaWYgKHNjb3JlKSB7XG4gICAgICAgICAgICB2YXIgaW50ID0gcGFyc2VJbnQoc2NvcmUpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3Ioc2NvcmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBjbGVhcigpIHtcbiAgICAgICAgdGhpcy51c2VyJC5uZXh0KFtdKTtcbiAgICB9XG4gICAgcHVibGljIEdldFVzZXJVcmwoVXNlckxvZ2luKSB7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBcIlVzZXJMb2dpblwiOiBVc2VyTG9naW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RldGFpbHNcIl0sIG5hdmlnYXRpb25FeHRyYXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBPcGVuRmlsdGVyT3B0aW9ucygpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJTZWFyY2ggT3B0aW9uc1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wiVXNlcnMgQnkgTG9jYXRpb25cIiwgXCJVc2VycyBCeSBMb2NhdGlvbiBhbmQgTGFuZ3VhZ2VcIiwgXCJVc2VycyBCeSBMb2dpblwiXVxuICAgICAgICB9O1xuICAgICAgICBkaWFsb2dzLmFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==