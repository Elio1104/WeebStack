import { Component, Input, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-anime-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  @Input() title: string = '';
  private _animeList: any[] = [];
  displayedAnime: any[] = [];
  currentIndex: number = 0;
  itemsPerPage: number = 5;

  @Input()
  set animeList(value: any[]) {
    this._animeList = value;
    this.updateDisplayedAnime();
  }

  get animeList(): any[] {
    return this._animeList;
  }

  ngOnInit(): void {
    this.updateDisplayedAnime();
  }

  updateDisplayedAnime(): void {
    this.displayedAnime = this.animeList.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  next(): void {
    if (this.currentIndex + this.itemsPerPage < this.animeList.length) {
      this.currentIndex += this.itemsPerPage;
    } else {
      this.currentIndex = 0; // Retour au début
    }
    this.updateDisplayedAnime();
  }

  previous(): void {
    if (this.currentIndex - this.itemsPerPage >= 0) {
      this.currentIndex -= this.itemsPerPage;
    } else {
      this.currentIndex = Math.max(0, this.animeList.length - this.itemsPerPage); // Retour à la fin
    }
    this.updateDisplayedAnime();
  }
}
