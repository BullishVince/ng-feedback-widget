import { Component } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { WidgetFormComponent } from "./widget-form.component";

@Component({
  selector: "feedback-widget",
  standalone: true,
  template: `
    <mat-dialog-content class="mat-typography">
      <div class="feedback_main">
        @if (currentTab === Tab.Main) {
        <div class="feedback_wrapper">
          <span class="feedback_title">What's on your mind?</span>
          <div class="feedback_items">
            <div class="feedback_item" (click)="currentTab = Tab.Issue">
              <div class="feedback_item_title">
                <mat-icon
                  aria-hidden="false"
                  aria-label="Bug Report Icon"
                  fontIcon="bug_report"
                  style="color: #ff5252"
                ></mat-icon>
                Issue
              </div>
            </div>
            <div class="feedback_item" (click)="currentTab = Tab.Idea">
              <div class="feedback_item_title">
                <mat-icon
                  aria-hidden="false"
                  aria-label="Emoji Objects Icon"
                  fontIcon="emoji_objects"
                  style="color: #f0bc2e"
                ></mat-icon>
                Idea
              </div>
            </div>
            <div class="feedback_item" (click)="currentTab = Tab.Other">
              <div class="feedback_item_title">
                <mat-icon
                  aria-hidden="false"
                  aria-label="More Horiz Icon"
                  fontIcon="more_horiz"
                  style="color: #3c3737"
                ></mat-icon>
                Other
              </div>
            </div>
          </div>
        </div>
        } @else if (currentTab === Tab.Issue) {
        <feedback-widget-form [currentTab]="currentTab"></feedback-widget-form>
        } @else if (currentTab === Tab.Idea) {
        <feedback-widget-form [currentTab]="currentTab"></feedback-widget-form>
        } @else if (currentTab === Tab.Other) {
        <feedback-widget-form [currentTab]="currentTab"></feedback-widget-form>
        } @else if (currentTab === Tab.Completed) {
        <feedback-widget-form [currentTab]="currentTab"></feedback-widget-form>
        }
      </div>
    </mat-dialog-content>
  `,
  styles: ``,
  imports: [MatDialogModule, MatIconModule, WidgetFormComponent],
})
export class WidgetComponent {
  currentTab: Tab = Tab.Main;
  Tab = Tab;
}
export enum Tab {
  Main,
  Issue,
  Idea,
  Other,
  Completed,
}
