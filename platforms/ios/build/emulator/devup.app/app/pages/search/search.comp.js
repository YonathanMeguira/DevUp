"use strict";
var core_1 = require("@angular/core");
var github_service_1 = require("../../services/github.service");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/Rx"); //import all operators
var SearchComponent = (function () {
    //public user: string;
    //public UserList$: BehaviorSubject<Array<string>> = new BehaviorSubject([]);
    function SearchComponent(githubService) {
        this.githubService = githubService;
        this.user$ = new BehaviorSubject_1.BehaviorSubject([{}]);
        // this.user.subscribe(res => console.log(res));
    }
    SearchComponent.prototype.search = function (e) {
        var _this = this;
        this.githubService.SearchUsers(e.object.text).subscribe(function (res) {
            _this.user$.next(res[0].items),
                function (error) { console.log(error); },
                function () { console.log(_this.user$['items']); };
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
    __metadata("design:paramtypes", [github_service_1.GitHubService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2guY29tcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW1FO0FBQ25FLGdFQUE4RDtBQUM5RCx3REFBdUQ7QUFFdkQsbUJBQWlCLENBQUMsc0JBQXNCO0FBV3hDLElBQWEsZUFBZTtJQUl4QixzQkFBc0I7SUFFdEIsNkVBQTZFO0lBQzdFLHlCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUpoRCxVQUFLLEdBQW1DLElBQUksaUNBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFLOUQsZ0RBQWdEO0lBQ3BELENBQUM7SUFDTSxnQ0FBTSxHQUFiLFVBQWMsQ0FBTTtRQUFwQixpQkFPQztRQU5HLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUNuRCxVQUFDLEdBQUc7WUFDQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUM3QixVQUFDLEtBQUssSUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUEsQ0FBQztnQkFDL0IsY0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQTtRQUM1QyxDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksZUFBZTtJQVAzQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7UUFDMUIsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7S0FFMUMsQ0FBQztxQ0FRcUMsOEJBQWE7R0FQdkMsZUFBZSxDQW1CM0I7QUFuQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHaXRIdWJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2dpdGh1Yi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcblxuaW1wb3J0ICdyeGpzL1J4JzsgLy9pbXBvcnQgYWxsIG9wZXJhdG9yc1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdTZWFyY2hDb21wb25lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvc2VhcmNoL3NlYXJjaC5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbR2l0SHViU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFnZXMvc2VhcmNoL3N0eWxlLmNzcyddXG5cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IHtcblxuICAgIHVzZXI6IHN0cmluZztcbiAgICB1c2VyJDogQmVoYXZpb3JTdWJqZWN0PEFycmF5PE9iamVjdD4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbe31dKTtcbiAgICAvL3B1YmxpYyB1c2VyOiBzdHJpbmc7XG5cbiAgICAvL3B1YmxpYyBVc2VyTGlzdCQ6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxzdHJpbmc+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2l0aHViU2VydmljZTogR2l0SHViU2VydmljZSkge1xuICAgICAgICAvLyB0aGlzLnVzZXIuc3Vic2NyaWJlKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKTtcbiAgICB9XG4gICAgcHVibGljIHNlYXJjaChlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5naXRodWJTZXJ2aWNlLlNlYXJjaFVzZXJzKGUub2JqZWN0LnRleHQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIkLm5leHQocmVzWzBdLml0ZW1zKSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtjb25zb2xlLmxvZyhlcnJvcil9LFxuICAgICAgICAgICAgICAgICgpID0+IHtjb25zb2xlLmxvZyh0aGlzLnVzZXIkWydpdGVtcyddKX1cbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG59XG4iXX0=