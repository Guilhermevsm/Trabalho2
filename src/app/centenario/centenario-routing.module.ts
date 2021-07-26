import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentenarioPage } from './centenario.page';

const routes: Routes = [
  {
    path: '',
    component: CentenarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentenarioPageRoutingModule {}
