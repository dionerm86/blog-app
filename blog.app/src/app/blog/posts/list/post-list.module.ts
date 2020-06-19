import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostlistComponent } from './postlist.component';
import {MatCardModule, MatButtonModule, MatTableModule, MatProgressBarModule} from '@angular/material';



@NgModule({
  declarations: [
    PostlistComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatProgressBarModule
  ],
  exports:[
    PostlistComponent
  ]
})
export class PostListModule { }
