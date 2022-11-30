import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const COMPONENTS = [LayoutsComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [COMPONENTS, HeaderComponent, FooterComponent],
  exports: COMPONENTS,
})
export class LayoutsModule {}
