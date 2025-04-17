import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {JikanService} from '../../../services/jikan.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-anime-details',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './anime-details.component.html',
  styleUrl: './anime-details.component.scss'
})
export class AnimeDetailsComponent implements OnInit {
  malId!: string;
  animeDetails: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private jikanService: JikanService) {}

  ngOnInit() : void {
    this.malId = this.route.snapshot.paramMap.get('mal_id')!;
    console.log(this.malId);

    this.jikanService.getAnimeDetails(this.malId).subscribe((response) => {
      this.animeDetails = response.data;
    });
  }
}
