import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule
  ],
  exports:[ContentComponent]
})
export class LayoutModule { }
