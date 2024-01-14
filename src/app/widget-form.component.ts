import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { TextFieldModule } from "@angular/cdk/text-field";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
  selector: "feedback-widget-form",
  standalone: true,
  imports: [MatIconModule, TextFieldModule, MatInputModule, MatFormFieldModule],
  template: `
    <div class="feedback_wrapper_issues_main">
      <div class="feedback_wrapper_issues">
        <!-- <IconButton 
          aria-label='back'
          onClick={() => props.toggle('menu')}
          size='small'
        > -->
        <!-- <ArrowBackIcon /> -->
        <mat-icon
          aria-hidden="false"
          aria-label="Arrow Back Icon"
          fontIcon="arrow_back"
        ></mat-icon>
        <!-- </IconButton> -->
        <span class="feedback_title"> Feedback </span>
        <!-- <IconButton
          aria-label='close'
          onClick={() => props.toggle('menu')}
          size='small'
        > -->
        <!-- <CloseIcon /> -->
        <mat-icon
          aria-hidden="false"
          aria-label="Close Icon"
          fontIcon="close"
        ></mat-icon>
        <!-- </IconButton> -->
      </div>
      <form autocomplete="off">
        <mat-form-field>
          <input matInput />
        </mat-form-field>
      </form>
      <button
        disabled="true"
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
  submitFeedback(): void {}
}
