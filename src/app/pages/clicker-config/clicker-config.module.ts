import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClickerConfigPageRoutingModule } from './clicker-config-routing.module';

import { ClickerConfigPage } from './clicker-config.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClickerConfigPageRoutingModule
  ],
  declarations: [ClickerConfigPage]
})
export class ClickerConfigPageModule {}
