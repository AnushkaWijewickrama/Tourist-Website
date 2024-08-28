import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, Subject } from "rxjs";
import { SERVER_API_URL } from "../util/common-util";
import { createRequestOption } from "../util/request-util";
import { Router } from "@angular/router";
import { Gallery } from "../models/gallery";

@Injectable({
  providedIn: "root",
})
export class GalleryService {
  private gallerys: any = [];
  private gallery$ = new Subject<Gallery[]>();
  readonly url = SERVER_API_URL + "/api/gallery";

  constructor(private http: HttpClient, private router: Router) { }

  getGallery() {
    this.http
      .get<Gallery>(this.url)
      .pipe(
        map((galleryData) => {
          console.log(galleryData)
          return galleryData;
        })
      )
      .subscribe((gallerys) => {
        this.gallerys = gallerys;
        this.gallery$.next(this.gallerys);
      });
  }

  getGalleryStream() {
    return this.gallery$.asObservable();
  }

  addGallery(title: string, image: any, description: string): void {
    const galleryData = new FormData();
    galleryData.append("title", title);
    galleryData.append("description", description);
    Object.keys(image).forEach(element => {
      galleryData.append("image", image[element].image);
    });
    this.http
      .post<Gallery>(this.url, galleryData)
      .subscribe((galleryData: any) => {
        const gallery: any = {
          title: galleryData?.title,
          description: galleryData?.description,
          imagePath: galleryData?.imagePath,
        };
        this.gallerys.push(gallery);

        this.gallery$.next(this.gallerys);
        this.router.navigate(['/gallery'])
      });
  }
  delete(id: string): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.url}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<any> {
    const options = createRequestOption(req);
    return this.http.get<any[]>(this.url, { params: options, observe: 'response' });
  }

}
