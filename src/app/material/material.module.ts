import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

const MATERIAL_MODEULES: any[] = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MATERIAL_MODEULES],
  exports: [...MATERIAL_MODEULES],
})
export class MaterialModule {}
