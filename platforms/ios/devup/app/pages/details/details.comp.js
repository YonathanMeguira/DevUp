"use strict";
var core_1 = require("@angular/core");
var github_service_1 = require("../../services/github.service");
var router_1 = require("@angular/router");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var DetailsComponent = (function () {
    function DetailsComponent(route, githubService) {
        var _this = this;
        this.route = route;
        this.githubService = githubService;
        this.userInfo$ = new BehaviorSubject_1.BehaviorSubject([{}]);
        this.route.queryParams.subscribe(function (params) {
            _this.UserLogin = params["UserLogin"];
            _this.githubService.ViewUser(_this.UserLogin).subscribe(function (res) {
                _this.userInfo$.next(res[0]);
                _this.userInfo$ = _this.userInfo$["_value"];
                console.log(JSON.stringify(_this.userInfo$));
            });
        });
    }
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    core_1.Component({
        selector: 'DetailsComponent',
        templateUrl: "./pages/details/details.html",
        providers: [github_service_1.GitHubService],
        styleUrls: ['./pages/details/style.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, github_service_1.GitHubService])
], DetailsComponent);
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlscy5jb21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMEM7QUFDMUMsZ0VBQThEO0FBQzlELDBDQUFpRDtBQUNqRCx3REFBdUQ7QUFTdkQsSUFBYSxnQkFBZ0I7SUFNM0IsMEJBQTJCLEtBQXFCLEVBQVUsYUFBNEI7UUFBdEYsaUJBV0M7UUFYMEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUh0RixjQUFTLEdBQW1DLElBQUksaUNBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFJcEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNyQyxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyQyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUNuRCxVQUFDLEdBQUc7Z0JBQ0YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBRTlDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLGdCQUFnQjtJQU41QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7UUFDMUIsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7S0FDekMsQ0FBQztxQ0FPa0MsdUJBQWMsRUFBeUIsOEJBQWE7R0FOM0UsZ0JBQWdCLENBbUI1QjtBQW5CWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdpdEh1YlNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZ2l0aHViLnNlcnZpY2VcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnRGV0YWlsc0NvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvZGV0YWlscy9kZXRhaWxzLmh0bWxcIixcbiAgcHJvdmlkZXJzOiBbR2l0SHViU2VydmljZV0sXG4gIHN0eWxlVXJsczogWycuL3BhZ2VzL2RldGFpbHMvc3R5bGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsc0NvbXBvbmVudCB7XG5cbiAgcHVibGljIFVzZXJMb2dpbjogc3RyaW5nO1xuICB1c2VySW5mbyQ6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxPYmplY3Q+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW3t9XSk7XG5cblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgZ2l0aHViU2VydmljZTogR2l0SHViU2VydmljZSkge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLlVzZXJMb2dpbiA9IHBhcmFtc1tcIlVzZXJMb2dpblwiXTtcbiAgICAgIHRoaXMuZ2l0aHViU2VydmljZS5WaWV3VXNlcih0aGlzLlVzZXJMb2dpbikuc3Vic2NyaWJlKFxuICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy51c2VySW5mbyQubmV4dChyZXNbMF0pO1xuICAgICAgICAgIHRoaXMudXNlckluZm8kID0gdGhpcy51c2VySW5mbyRbXCJfdmFsdWVcIl07XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy51c2VySW5mbyQpKTtcblxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbiJdfQ==