import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import {DraggablePageComponent} from './features/draggable-page/draggable-page.component';
import {AnimeDetailsComponent} from './features/anime/anime-details/anime-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'drag', component: DraggablePageComponent},
  { path: 'anime', children : [
      { path : ':mal_id', component: AnimeDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
