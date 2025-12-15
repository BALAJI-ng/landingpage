import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-landing-page-3",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: "./landing3.page.html",
})
export class LandingPage3Component {
  isSidebarOpen = signal<boolean>(true);
  isProfileOpen = signal<boolean>(false);
  isChatOpen = signal<boolean>(false);

  toggleSidebar() {
    this.isSidebarOpen.update((v) => !v);
  }
  toggleProfile() {
    this.isProfileOpen.update((v) => !v);
  }
  openChat() {
    this.isChatOpen.set(true);
  }
  closeChat() {
    this.isChatOpen.set(false);
  }
}
