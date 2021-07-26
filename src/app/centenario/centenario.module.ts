import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentenarioPageRoutingModule } from './centenario-routing.module';

import { CentenarioPage } from './centenario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentenarioPageRoutingModule
  ],
  declarations: [CentenarioPage]
})
export class CentenarioPageModule {}
