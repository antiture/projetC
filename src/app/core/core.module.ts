import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ServicesModule } from '../services/services.module';
import { PagesModule } from '../pages/pages.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule
  ]
})
export class CoreModule { }
