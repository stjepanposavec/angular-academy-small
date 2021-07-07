import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/components/contact.component';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [AppComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule, ContactModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
