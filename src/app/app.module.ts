import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { StudentsResultComponent } from './students-result/students-result.component';
import { StudentAdminDialogComponent } from './student-admin-dialog/student-admin-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsResultComponent,
    StudentAdminDialogComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule],
  providers: [],
  entryComponents: [StudentAdminDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
