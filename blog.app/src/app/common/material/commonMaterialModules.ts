import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatTableModule,
         MatProgressBarModule, MatIconModule, MatTooltipModule,
         MatDialogModule,
         MatInputModule,
         MatFormFieldModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule

  ],
  exports:[
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ]
})

export class CommonMaterialModule { }
