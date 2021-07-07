import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './views/contact-list/contact-list.component';

@NgModule({
  declarations: [ContactListComponent],
  imports: [CommonModule],
  exports: [ContactListComponent],
})
export class ContactModule {}
