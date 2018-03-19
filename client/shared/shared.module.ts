import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from '@angular/forms';

//COMPONENTS
import { NotFoundComponent }  from './components/not-found/not-found.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    NotFoundComponent
  ],
})
export class SharedModule { }
