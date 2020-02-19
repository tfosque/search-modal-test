import { Injectable } from '@angular/core';
// import GoogleImageSearch from 'free-google-image-search'

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  // constructor(private search: GoogleImageSearch) { }


  getPhotos () {
    // const photos = this.search.searchImage("cats");
   /*  GoogleImageSearch.searchImage("cats")
      .then((res) => {
          console.log(res); // This will return array of image URLs
      }) */

    // console.log({photos})
    return 'hello';
  }
}
