"use strict";
var core_1 = require("@angular/core");
var github_service_1 = require("../../services/github.service");
var router_1 = require("@angular/router");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var utilityModule = require("utils/utils");
var email = require("nativescript-email");
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
    DetailsComponent.prototype.OpenUrl = function (url) {
        utilityModule.openUrl(url);
    };
    DetailsComponent.prototype.SendEmail = function () {
        email.compose({
            subject: "Yo",
            body: "Hello <strong>dude</strong> :)",
            to: ['eddyverbruggen@gmail.com', 'to@person2.com'],
            cc: ['ccperson@somewhere.com'],
            bcc: ['eddy@combidesk.com', 'eddy@x-services.nl'],
            appPickerTitle: 'Compose with..'
        }).then(function () {
            console.log("Email composer closed");
        }, function (err) {
            console.log("Error: " + err);
        });
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlscy5jb21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMEM7QUFDMUMsZ0VBQThEO0FBQzlELDBDQUFpRDtBQUNqRCx3REFBdUQ7QUFDdkQsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNDLDBDQUE0QztBQVM1QyxJQUFhLGdCQUFnQjtJQU0zQiwwQkFBMkIsS0FBcUIsRUFBVSxhQUE0QjtRQUF0RixpQkFXQztRQVgwQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSHRGLGNBQVMsR0FBbUMsSUFBSSxpQ0FBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUlwRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3JDLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQ25ELFVBQUMsR0FBRztnQkFDRixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFOUMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxrQ0FBTyxHQUFkLFVBQWUsR0FBRztRQUNoQixhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDTSxvQ0FBUyxHQUFoQjtRQUNHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxnQ0FBZ0M7WUFDdEMsRUFBRSxFQUFFLENBQUMsMEJBQTBCLEVBQUUsZ0JBQWdCLENBQUM7WUFDbEQsRUFBRSxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDOUIsR0FBRyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUM7WUFDakQsY0FBYyxFQUFFLGdCQUFnQjtTQUNuQyxDQUFDLENBQUMsSUFBSSxDQUNMO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBRSxVQUFTLEdBQUc7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCx1QkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksZ0JBQWdCO0lBTjVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztRQUMxQixTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztLQUN6QyxDQUFDO3FDQU9rQyx1QkFBYyxFQUF5Qiw4QkFBYTtHQU4zRSxnQkFBZ0IsQ0FxQzVCO0FBckNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2l0SHViU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9naXRodWIuc2VydmljZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcbnZhciB1dGlsaXR5TW9kdWxlID0gcmVxdWlyZShcInV0aWxzL3V0aWxzXCIpO1xuaW1wb3J0ICogYXMgZW1haWwgZnJvbSBcIm5hdGl2ZXNjcmlwdC1lbWFpbFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0RldGFpbHNDb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2RldGFpbHMvZGV0YWlscy5odG1sXCIsXG4gIHByb3ZpZGVyczogW0dpdEh1YlNlcnZpY2VdLFxuICBzdHlsZVVybHM6IFsnLi9wYWdlcy9kZXRhaWxzL3N0eWxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbHNDb21wb25lbnQge1xuXG4gIHB1YmxpYyBVc2VyTG9naW46IHN0cmluZztcbiAgdXNlckluZm8kOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8T2JqZWN0Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFt7fV0pO1xuXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGdpdGh1YlNlcnZpY2U6IEdpdEh1YlNlcnZpY2UpIHtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5Vc2VyTG9naW4gPSBwYXJhbXNbXCJVc2VyTG9naW5cIl07XG4gICAgICB0aGlzLmdpdGh1YlNlcnZpY2UuVmlld1VzZXIodGhpcy5Vc2VyTG9naW4pLnN1YnNjcmliZShcbiAgICAgICAgKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMudXNlckluZm8kLm5leHQocmVzWzBdKTtcbiAgICAgICAgICB0aGlzLnVzZXJJbmZvJCA9IHRoaXMudXNlckluZm8kW1wiX3ZhbHVlXCJdO1xuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMudXNlckluZm8kKSk7XG5cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcHVibGljIE9wZW5VcmwodXJsKSB7XG4gICAgdXRpbGl0eU1vZHVsZS5vcGVuVXJsKHVybCk7XG4gIH1cbiAgcHVibGljIFNlbmRFbWFpbCgpIHtcbiAgICAgZW1haWwuY29tcG9zZSh7XG4gICAgICBzdWJqZWN0OiBcIllvXCIsXG4gICAgICBib2R5OiBcIkhlbGxvIDxzdHJvbmc+ZHVkZTwvc3Ryb25nPiA6KVwiLFxuICAgICAgdG86IFsnZWRkeXZlcmJydWdnZW5AZ21haWwuY29tJywgJ3RvQHBlcnNvbjIuY29tJ10sXG4gICAgICBjYzogWydjY3BlcnNvbkBzb21ld2hlcmUuY29tJ10sXG4gICAgICBiY2M6IFsnZWRkeUBjb21iaWRlc2suY29tJywgJ2VkZHlAeC1zZXJ2aWNlcy5ubCddLFxuICAgICAgYXBwUGlja2VyVGl0bGU6ICdDb21wb3NlIHdpdGguLicgXG4gIH0pLnRoZW4oXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVtYWlsIGNvbXBvc2VyIGNsb3NlZFwiKTtcbiAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbiJdfQ==