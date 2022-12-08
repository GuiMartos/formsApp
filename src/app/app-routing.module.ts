import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Drivers } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  }
];
@NgModule({
  imports: [
    IonicStorageModule.forRoot({
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    }),
    IonicStorageModule.forRoot(),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
})
export class AppRoutingModule {}
