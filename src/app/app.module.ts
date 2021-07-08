import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { ContactListComponent } from './contact/views/contact-list/contact-list.component';

@NgModule({
  declarations: [AppComponent, ContactListComponent],
  imports: [BrowserModule, AppRoutingModule, ContactModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
