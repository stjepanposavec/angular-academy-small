import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search.component';
import { ContactComponent } from './components/contact.component';

@NgModule({
  declarations: [SearchComponent, ContactComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SearchComponent, ContactComponent],
})
export class ContactModule {}
