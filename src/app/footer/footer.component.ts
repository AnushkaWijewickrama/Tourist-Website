import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../shared/services/gallery.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  galleryList: any = [];
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.getGalleryList()
  }

  getGalleryList(): void {
    this.galleryService.query().subscribe((res: HttpResponse<any>) => {
      this.galleryList = res.body
      console.log(res.body)
    })
  }
}
