import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeroListAutoCalcPageComponent } from './hero-list-auto-calc-page/hero-list-auto-calc-page.component';
import { HeroListEnterLeavePageComponent } from './hero-list-enter-leave-page/hero-list-enter-leave-page.component';
import { HeroListGroupPageComponent } from './hero-list-group-page/hero-list-group-page.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { HomeComponent } from './home/home.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { OpenClosePageComponent } from './open-close-page/open-close-page.component';
import { StatusSliderPageComponent } from './status-slider-page/status-slider-page.component';
import { ToggleAnimationsPageComponent } from './toggle-animations-page/toggle-animations-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/enter-leave' },
      { path: 'open-close', component: OpenClosePageComponent, data: {animation: 'open-close'}},
      { path: 'status', component: StatusSliderPageComponent, data: {animation: 'status'}},
      { path: 'toggle', component: ToggleAnimationsPageComponent, data: {animation: 'toggle'}},
      { path: 'heroes', component: HeroListPageComponent, data: {animation: 'FilterPage'} },
      { path: 'hero-groups', component: HeroListGroupPageComponent, data: {animation: 'hero-groups'} },
      { path: 'enter-leave', component: HeroListEnterLeavePageComponent, data: {animation: 'enter-leave'} },
      { path: 'auto', component: HeroListAutoCalcPageComponent, data: {animation: 'auto'} },
      { path: 'insert-remove', component: InsertRemoveComponent, data: {animation: 'insert-remove'}},
      { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
      { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
