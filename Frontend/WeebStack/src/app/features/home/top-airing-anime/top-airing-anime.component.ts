import { Component, OnInit } from '@angular/core';
import { JikanService } from '../../../services/jikan.service';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-top-airing-anime',
  imports: [
  ],
  templateUrl: './top-airing-anime.component.html',
  styleUrl: ''
})
export class TopAiringAnimeComponent implements OnInit {
  topAiringAnime: any[] = [];

  constructor(private jikanService: JikanService) {}

  ngOnInit(): void {
    this.jikanService.getTopAiringAnime().subscribe((response) => {
      this.topAiringAnime = response.data;
    });
  }
}
