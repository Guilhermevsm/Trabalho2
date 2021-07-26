import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina1',
    loadChildren: () => import('./pagina1/pagina1.module').then( m => m.Pagina1PageModule)
  },
  {
    path: 'centenario',
    loadChildren: () => import('./centenario/centenario.module').then( m => m.CentenarioPageModule)
  },
  {
    path: 'matriz',
    loadChildren: () => import('./matriz/matriz.module').then( m => m.MatrizPageModule)
  },
  {
    path: 'mercado',
    loadChildren: () => import('./mercado/mercado.module').then( m => m.MercadoPageModule)
  },
  {
    path: 'catedral',
    loadChildren: () => import('./catedral/catedral.module').then( m => m.CatedralPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'pesquisa',
    loadChildren: () => import('./pesquisa/pesquisa.module').then( m => m.PesquisaPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
