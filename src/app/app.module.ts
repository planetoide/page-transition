import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenClosePageComponent } from './open-close-page/open-close-page.component';
import { StatusSliderPageComponent } from './status-slider-page/status-slider-page.component';
import { ToggleAnimationsPageComponent } from './toggle-animations-page/toggle-animations-page.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { HeroListGroupPageComponent } from './hero-list-group-page/hero-list-group-page.component';
import { HeroListEnterLeavePageComponent } from './hero-list-enter-leave-page/hero-list-enter-leave-page.component';
import { HeroListAutoCalcPageComponent } from './hero-list-auto-calc-page/hero-list-auto-calc-page.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenClosePageComponent,
    StatusSliderPageComponent,
    ToggleAnimationsPageComponent,
    HeroListPageComponent,
    HeroListGroupPageComponent,
    HeroListEnterLeavePageComponent,
    HeroListAutoCalcPageComponent,
    InsertRemoveComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
