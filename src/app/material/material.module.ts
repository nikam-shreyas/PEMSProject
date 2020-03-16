import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatButtonModule,
  MatBadgeModule,
  MatButtonToggleModule,
  MatIconModule,
  MatFormFieldModule,
  MatMenuModule,
  MatDialogModule,
  MatInputModule,
  MatCheckboxModule,
  MatListModule,
  MatSelectModule,
  MatProgressBarModule,
  MatNativeDateModule,
  MatSidenavModule
} from '@angular/material';

const MaterialModuleComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatMenuModule,
  MatDialogModule,
  MatInputModule,
  MatCheckboxModule,
  MatListModule,
  MatSelectModule,
  MatProgressBarModule,
  MatNativeDateModule,
  MatSidenavModule, 
  MatExpansionModule
]

@NgModule({
  imports: [MaterialModuleComponents],
  exports: [MaterialModuleComponents]
})
export class MaterialModule { }
