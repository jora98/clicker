import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clicker',
    pathMatch: 'full'
  },
  {
    path: 'clicker',
    loadChildren: () => import('./pages/clicker/clicker.module').then( m => m.ClickerPageModule)
  },
  {
    path: 'clicker/clickerConfig',
    loadChildren: () => import('./pages/clicker-config/clicker-config.module').then( m => m.ClickerConfigPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
