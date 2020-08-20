import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { FlexLayoutModule } from '@angular/flex-layout';

const SHARED_MODULES: any[] = [
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  FlexLayoutModule,
];

//All shared pipes and directives should go here
const SHARED_PIPES_N_DIRECTIVES: any[] = [OnlyNumberDirective];

@NgModule({
  declarations: [...SHARED_PIPES_N_DIRECTIVES],
  imports: [CommonModule, ...SHARED_MODULES],
  exports: [...SHARED_MODULES, ...SHARED_PIPES_N_DIRECTIVES],
})
export class SharedModule {}
