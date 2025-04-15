import { Component, OnInit } from '@angular/core';
import { JikanService } from '../../services/jikan.service';
import { AnimeListComponent } from './anime-list/anime-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AnimeListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  seasonAnime: any[] = [];
  topAiringAnime: any[] = [];
  topAnime: any[] = [];

  constructor(private jikanService: JikanService) {}

  ngOnInit(): void {
    this.jikanService.getAnimeBySeasons(2025, 'spring').subscribe((response) => {
      this.seasonAnime = response.data;
    });

    this.jikanService.getTopAiringAnime().subscribe((response) => {
      this.topAiringAnime = response.data;
    });

    this.jikanService.getTopAnime().subscribe((response) => {
      this.topAnime = response.data;
    });
  }
}
