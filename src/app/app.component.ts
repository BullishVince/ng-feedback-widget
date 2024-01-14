import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { WidgetComponent } from "./widget.component";

@Component({
  selector: "feedback-root",
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: "app.component.html",
  styles: [
    `
      .feedback-button {
        margin-top: 9px;
        position: fixed;
        bottom: 15px;
        right: 15px;
        background-color: #fff;
        border-radius: 100px;
        box-shadow: 0px 0 1px 0.1rem rgba(94, 43, 250, 0.25);
      }
    `,
  ],
})
export class AppComponent {
  title = "ng-feedback-widget";
  public isWidgetOpened: boolean = false;
  widget = inject(MatDialog);
  toggleDialog() {
    if (!this.isWidgetOpened) {
      this.isWidgetOpened = true;
      const dialogRef = this.widget.open(WidgetComponent, {
        autoFocus: false,
        disableClose: true,
        hasBackdrop: false,
        position: { bottom: "75px", right: "15px" },
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    } else {
      this.isWidgetOpened = false;
      this.widget.closeAll();
    }
  }
}
