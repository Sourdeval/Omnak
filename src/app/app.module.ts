import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WayComponent } from './way/way.component';
import { SkillComponent } from './skill/skill.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { RulesComponent } from './rules/rules.component';
import { Table20Component } from './table20/table20.component';
import { WorldComponent } from './world/world.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WayComponent,
    SkillComponent,
    SkillListComponent,
    RulesComponent,
    Table20Component,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
