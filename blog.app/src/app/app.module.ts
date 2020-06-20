import { MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { CommonMaterialModule } from './common/material/commonMaterialModules';
import { PostListModule } from './blog/posts/list/post-list.module';
import { BlogModule } from './blog/blog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatToolbarModule,
    CommonMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    PostListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
