import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JikanService {
  private apiUrl = 'https://api.jikan.moe/v4/';

  constructor(private http: HttpClient) {}

  getTopAnime(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}top/anime`);
  }

  getTopAiringAnime(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}top/anime?filter=airing`);
  }

  getAnimeBySeasons(year : number, season : string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}seasons/${year}/${season}`);
  }
}
