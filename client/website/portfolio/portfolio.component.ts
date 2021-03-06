import { Component } from '@angular/core';

@Component({
  selector: 'portfolio',
  styleUrls: ['portfolio.scss'],
  templateUrl: 'portfolio.pug'
})

export class PortfolioComponent {

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

}
