import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { DividerModule } from "primeng/divider";
import { DialogModule } from "primeng/dialog";

type NavKey = "data" | "projects" | "admin" | "help";

interface ChatMsg {
  from: "user" | "assistant";
  text: string;
}

@Component({
  selector: "app-landing-page",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    DividerModule,
    DialogModule,
  ],
  templateUrl: "./landing.page.html",
})
export class LandingPageComponent {
  active = signal<NavKey>("data");
  isChatOpen = signal<boolean>(false);

  chatInput = "";
  messages = signal<ChatMsg[]>([
    { from: "assistant", text: "Hi, how can I help you?" },
    { from: "user", text: "Create a back testing project" },
    { from: "assistant", text: "Sure" },
  ]);

  setActive(key: NavKey) {
    this.active.set(key);
    this.closeChat();
  }

  openChat() {
    this.isChatOpen.set(true);
  }
  closeChat() {
    this.isChatOpen.set(false);
  }

  send() {
    const value = (this.chatInput || "").trim();
    if (!value) return;

    this.messages.update((prev) => [...prev, { from: "user", text: value }]);
    this.chatInput = "";

    setTimeout(() => {
      this.messages.update((prev) => [
        ...prev,
        {
          from: "assistant",
          text: "Got it. I can help you set up the project shell.",
        },
      ]);
    }, 250);
  }
}
