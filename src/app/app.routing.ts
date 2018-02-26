import { Componente3Component } from './componente3/componente3.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Componente2Component } from './componente2/componente2.component';

const routes: Routes = [
  { path: 'componente2', component: Componente2Component },
  { path: 'componente3', component: Componente3Component },
  { path: '', pathMatch:'full', redirectTo: 'AppComponent' },
  { path: '**', component: AppComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
       useHash : true
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRouterModule { }
