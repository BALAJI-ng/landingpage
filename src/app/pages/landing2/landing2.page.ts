import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-landing-page-2",
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule],
  templateUrl: "./landing2.page.html",
})
export class LandingPage2Component {
  active = signal<"data" | "projects" | "admin" | "help" | "chat">("data");
  isChatOpen = signal<boolean>(false);
  isSidebarOpen = signal<boolean>(true);
  isProfileOpen = signal<boolean>(false);

  setActive(key: "data" | "projects" | "admin" | "help") {
    this.active.set(key);
    this.isChatOpen.set(false);
  }

  openChat() {
    this.isChatOpen.set(true);
  }
  closeChat() {
    this.isChatOpen.set(false);
  }

  toggleSidebar() {
    this.isSidebarOpen.update((v) => !v);
  }

  toggleProfile() {
    this.isProfileOpen.update((v) => !v);
  }
}
