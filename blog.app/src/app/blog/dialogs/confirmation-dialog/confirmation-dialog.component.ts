import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comfirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent{

  constructor(private dialogRef: MatDialogRef<void>) { }

  public Submit() {
    this.dialogRef.close(true)
  }

}
