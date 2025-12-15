import { Routes } from "@angular/router";
import { LandingPageComponent } from "./pages/landing/landing.page";
import { LandingPage2Component } from "./pages/landing2/landing2.page";

export const routes: Routes = [
  { path: "", pathMatch: "full", component: LandingPageComponent },
  { path: "landing2", component: LandingPage2Component },
];
