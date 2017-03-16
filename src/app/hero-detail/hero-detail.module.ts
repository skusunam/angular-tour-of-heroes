import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { CommonModule }         from '@angular/common';

import { HeroDetailComponent }  from './hero-detail.component';
import { HeroDetailRoutingModule }  from './hero-detail-routing.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailRoutingModule
  ],
  declarations: [HeroDetailComponent]
})
export class HeroDetailModule {}