import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-landing-page-4",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: "./landing4.page.html",
})
export class LandingPage4Component {
  isSidebarOpen = signal<boolean>(true);
  isProfileOpen = signal<boolean>(false);

  toggleSidebar() {
    this.isSidebarOpen.update((v) => !v);
  }
  toggleProfile() {
    this.isProfileOpen.update((v) => !v);
  }
}
