import { Component, OnInit } from '@angular/core';
import { JikanService } from '../../../services/jikan.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-top-anime',
  imports: [
  ],
  templateUrl: './top-anime.component.html',
  styleUrl: ''
})
export class TopAnimeComponent implements OnInit {
  topAnime: any[] = [];

  constructor(private jikanService: JikanService) {}

  ngOnInit(): void {
    this.jikanService.getTopAnime().subscribe((response) => {
      this.topAnime = response.data;
    });
  }
}
