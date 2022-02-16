import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBadgeModule} from '@angular/material/badge';

const materialDesign = [
  MatToolbarModule,
  MatTooltipModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  ClipboardModule,
  MatTableModule,
  MatSidenavModule,
  MatSelectModule,
  MatProgressBarModule,
  MatBadgeModule
];

@NgModule({
  declarations: [],
  imports: [materialDesign],
  exports: [materialDesign]
})
export class MaterialDesignModule { }
