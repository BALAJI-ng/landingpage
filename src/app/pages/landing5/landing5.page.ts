import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-landing-page-5",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ButtonModule],
  templateUrl: "./landing5.page.html",
})
export class LandingPage5Component {
  isRailOpen = signal<boolean>(true);
  toggleRail() {
    this.isRailOpen.update((v) => !v);
  }
}
