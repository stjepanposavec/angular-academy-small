import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search.component';
import { ContactComponent } from './components/contact.component';
import { ContactListComponent } from './views/contact-list/contact-list.component';

@NgModule({
  declarations: [SearchComponent, ContactComponent, ContactListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ContactListComponent],
})
export class ContactModule {}
