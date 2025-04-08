import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private info:HttpClient) {}


  returnAnime(){
    return this.info.get('https://hotelbooking.webwide.ge/api/Rooms/GetAll')
  }

}
