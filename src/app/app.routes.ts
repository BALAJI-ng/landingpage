import { Routes } from "@angular/router";
import { LandingPageComponent } from "./pages/landing/landing.page";
import { LandingPage2Component } from "./pages/landing2/landing2.page";
import { LandingPage3Component } from "./pages/landing3/landing3.page";
import { LandingPage4Component } from "./pages/landing4/landing4.page";
import { LandingPage5Component } from "./pages/landing5/landing5.page";

export const routes: Routes = [
  { path: "", pathMatch: "full", component: LandingPageComponent },
  { path: "landing2", component: LandingPage2Component },
  { path: "landing3", component: LandingPage3Component },
  { path: "landing4", component: LandingPage4Component },
  { path: "landing5", component: LandingPage5Component },
];
