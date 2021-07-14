import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './views/header.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation.component';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
