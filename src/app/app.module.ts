import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ChildComponent } from './child/child.component';

export const ROUTES: Routes = [
  { path: '', component: InputComponent },
  { path: 'child', component: ChildComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
