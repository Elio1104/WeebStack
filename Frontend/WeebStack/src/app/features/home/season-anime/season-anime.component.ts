import { Component, OnInit } from '@angular/core';
import { JikanService } from '../../../services/jikan.service';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-season-anime',
  imports: [
  ],
  templateUrl: './season-anime.component.html',
  styleUrl: ''
})
export class SeasonAnimeComponent implements OnInit {
  seasonAnime: any[] = [];

  constructor(private jikanService: JikanService) {}

  ngOnInit(): void {
    this.jikanService.getAnimeBySeasons(2025, 'spring').subscribe((response) => {
      this.seasonAnime = response.data;
    });
  }
}
