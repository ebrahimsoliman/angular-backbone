import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LifecycleHooksComponent} from "./lifecycle-hooks.component";

const routes: Routes = [
  {
    path: '',
    component: LifecycleHooksComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleHooksRoutingModule { }
