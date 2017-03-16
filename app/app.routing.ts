import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { SearchComponent } from "./pages/search/search.comp";
import { DetailsComponent } from "./pages/details/details.comp";

export const DevUpRoutes: Routes = [
    { path: "", redirectTo: "/search", pathMatch: "full" },
    { path: "search", component: SearchComponent },
    { path: "details", component: DetailsComponent },
];


export const DevUpComponents: any = [
    SearchComponent, DetailsComponent
]