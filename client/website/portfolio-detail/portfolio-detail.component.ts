import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { keyBy } from 'lodash';

@Component({
  selector: 'portfolio-detail',
  styleUrls: ['portfolio-detail.scss'],
  templateUrl: 'portfolio-detail.pug'
})

export class PortfolioDetailComponent {

  private imgUrl: string;
  private projects = [
    {
      "id": 1,
      "name": "Project Name",
      "category": "Category",
      "url": 'proj-1',
      "thumbnail": "img/portfolio/thumbnails/1.jpg",
      "fullImage": "img/portfolio/fullsize/1.jpg"
    },
    {
      "id": 2,
      "name": "Project Name",
      "category": "Category",
      "url": 'proj-2',
      "thumbnail": "img/portfolio/thumbnails/2.jpg",
      "fullImage": "img/portfolio/fullsize/2.jpg",
    },
    {
      "id": 3,
      "name": "Project Name",
      "category": "Category",
      "url": 'proj-3',
      "thumbnail": "img/portfolio/thumbnails/3.jpg",
      "fullImage": "img/portfolio/fullsize/3.jpg",
    },
    {
      "id": 4,
      "name": "Project Name",
      "category": "Category",
      "url": 'proj-4',
      "thumbnail": "img/portfolio/thumbnails/4.jpg",
      "fullImage": "img/portfolio/fullsize/4.jpg",
    },
    {
      "id": 5,
      "name": "Project Name",
      "category": "Category",
      "url": 'proj-5',
      "thumbnail": "img/portfolio/thumbnails/5.jpg",
      "fullImage": "img/portfolio/fullsize/5.jpg",
    },
    {
      "id": 6,
      "name": "Project Name",
      "category": "Category",
      "url": 'proj-6',
      "thumbnail": "img/portfolio/thumbnails/6.jpg",
      "fullImage": "img/portfolio/fullsize/6.jpg",
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){
    this.route.params.subscribe((data: any) => {
      const projectUrlMap = keyBy(this.projects, 'url');
      if(projectUrlMap[data.id]){
        this.imgUrl = projectUrlMap[data.id].fullImage;
      } else {
        this.router.navigateByUrl('/404');
      }
    });
  }


}
