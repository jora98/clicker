import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClickerConfigPage } from './clicker-config.page';

const routes: Routes = [
  {
    path: '',
    component: ClickerConfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickerConfigPageRoutingModule {}
