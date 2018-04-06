import { Component } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
    selector: 'about',
    styleUrls: [ 'about.scss'],
    templateUrl: 'about.pug',
})

export class AboutComponent  {

    constructor(private dataService: DataService) {

    }

    ngOnInit(){
      let url = 'https://api.randomuser.me/?nat=US&results=12'
      this.dataService.get(url).subscribe(res => {
          console.log(res);
        }, error => {
        console.log(error);
      })
    }
}
