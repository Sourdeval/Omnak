import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WayComponent } from './way/way.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { RulesComponent } from './rules/rules.component';
import { Table20Component } from './table20/table20.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'way/:id',
    component: WayComponent,
  },
  {
    path: 'table/:id',
    component: Table20Component,
  },
  {
    path: 'skills',
    component: SkillListComponent,
  },
  {
    path: 'rules',
    component: RulesComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
