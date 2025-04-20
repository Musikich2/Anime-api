import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {



  constructor(private info:HttpClient) {}


  returnAnimeWithSearch(search: string) {
    const params = new HttpParams().set('q', search);
    return this.info.get('https://api.jikan.moe/v4/anime', { params });
  }


  returnAnime() {
    
    return this.info.get('https://api.jikan.moe/v4/anime');
  }

}
