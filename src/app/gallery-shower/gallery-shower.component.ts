import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-shower',
  templateUrl: './gallery-shower.component.html',
  styleUrls: ['./gallery-shower.component.css']
})
export class GalleryShowerComponent {

  public moreInfoRooms:any;
  public savedDate:boolean = false



public tes:any;
  constructor(private router:ActivatedRoute){
    this.router.queryParams.subscribe((data:any) => {
        this.moreInfoRooms = JSON.parse(data.roomInfo);
        console.log(this.moreInfoRooms)
    });
  }

  setDate(){
    this.savedDate = true
  }


  
}
