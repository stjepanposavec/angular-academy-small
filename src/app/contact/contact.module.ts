import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './views/contact-list/contact-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ContactListComponent],
})
export class ContactModule {}
