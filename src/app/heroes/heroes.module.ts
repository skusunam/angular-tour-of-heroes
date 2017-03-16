import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { HeroesComponent }      from './heroes.component';
import { HeroesRoutingModule }  from './hero-routing.modules';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  declarations: [HeroesComponent]
})
export class HeroesModule {}