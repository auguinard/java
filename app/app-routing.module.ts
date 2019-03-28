import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
    {
        path: 'connexion',
        loadChildren: './connexion/connexion.module#ConnexionPageModule'
    },
    {
        path: 'inscription',
        loadChildren: './inscription/inscription.module#InscriptionPageModule'
    },
    {
        path: 'a_propos',
        loadChildren: './a_propos/a_propos.module#A_proposPageModule'
    },
    {
        path: 'aide',
        loadChildren: './aide/aide.module#AidePageModule'
    },
    {
        path: 'feculent',
        loadChildren: './feculent/feculent.module#FeculentPageModule'
    },
    {
        path: 'cereals',
        loadChildren: './cereals/cereals.module#CerealsPageModule'
    },
    {   path: 'fruits',
        loadChildren: './fruits/fruits.module#FruitsPageModule'
    },
    {   path: 'legumes',
        loadChildren: './legumes/legumes.module#LegumesPageModule'
    },
    {   path: 'feuilles',
        loadChildren: './feuilles/feuilles.module#FeuillesPageModule'
    },
    {
        path: 'cart',
        loadChildren: './cart/cart.module#CartPageModule'
    },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
