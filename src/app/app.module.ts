import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { DisplatComponent } from './displat/displat.component';
import { SharedService } from './shared.service';

const navRoutes: Routes = [
  {path: 'entry', component: EntryComponent},
  {path: 'display', component: DisplatComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    DisplatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(navRoutes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
