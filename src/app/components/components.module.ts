import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarraPesquisaComponent } from '../components/barra-pesquisa/barra-pesquisa.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EstrelasComponent } from './estrelas/estrelas.component';
import { FiltroRankComponent } from './filtro-rank/filtro-rank.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FiltroAvaliacoesComponent } from './filtro-avaliacoes/filtro-avaliacoes.component';

@NgModule({
  declarations: [
    EstrelasComponent,
    BarraPesquisaComponent,
    SidebarComponent,
    FiltroRankComponent,
    NavbarComponent,
    FiltroAvaliacoesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    BarraPesquisaComponent,
    EstrelasComponent,
    FiltroRankComponent,
    NavbarComponent,
    FiltroAvaliacoesComponent
  ]
})
export class ComponentsModule {}
