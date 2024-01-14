import { Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { TextFieldModule } from "@angular/cdk/text-field";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { Tab } from "./widget.component";

@Component({
  selector: "feedback-widget-form",
  standalone: true,
  imports: [
    MatIconModule,
    TextFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  template: `
    <div class="feedback_wrapper_issues_main">
      <div class="feedback_wrapper_issues">
        <mat-icon
          aria-hidden="false"
          fontIcon="arrow_back"
          aria-label="back"
          (click)="goBack()"
          style="cursor: pointer;"
        ></mat-icon>
        <span class="feedback_title"> Feedback </span>
        <mat-icon
          aria-hidden="false"
          aria-label="close"
          fontIcon="close"
          style="cursor: pointer;"
        ></mat-icon>
      </div>
      <form autocomplete="off">
        <mat-form-field>
          <input matInput />
        </mat-form-field>
      </form>
      <button
        mat-raised-button
        color="primary"
        style="boxShadow: none; margin-top: 9px; border-radius: 20px;"
        (click)="submitFeedback()"
      >
        Send Feedback
      </button>
    </div>
  `,
  styles: ``,
})
export class WidgetFormComponent {
  @Input() currentTab: Tab | undefined;
  submitFeedback(): void {}

  goBack(): void {
    this.currentTab = Tab.Main;
  }
}
