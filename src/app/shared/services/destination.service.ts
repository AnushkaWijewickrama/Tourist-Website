import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, Subject } from "rxjs";
import { SERVER_API_URL } from "../util/common-util";
import { createRequestOption } from "../util/request-util";
import { Router } from "@angular/router";
import { Destination } from "../models/destination";


@Injectable({
  providedIn: "root",
})
export class DestinationService {
  private destinations: any = [];
  private destination$ = new Subject<Destination[]>();
  readonly url = SERVER_API_URL + "/api/destination";

  constructor(private http: HttpClient, private route: Router) { }

  getdestination() {
    this.http
      .get<Destination>(this.url)
      .pipe(
        map((destinationData) => {
          return destinationData;
        })
      )
      .subscribe((destinations) => {
        this.destinations = destinations;
        this.destination$.next(this.destinations);
      });
  }

  getdestinationStream() {
    return this.destination$.asObservable();
  }

  adddestination(title: string, image: File, description: string, latest: any, price: string, discount: string, location: string): void {
    const destinationData = new FormData();
    destinationData.append("title", title);
    destinationData.append("image", image);
    destinationData.append("description", description);
    destinationData.append("latest", latest);
    destinationData.append("price", price);
    destinationData.append("discount", discount);
    destinationData.append("location", location);
    this.http
      .post<Destination>(this.url, destinationData)
      .subscribe((destinationData: any) => {
        const destination1: Destination = {
          _id: destinationData?._id,
          title: destinationData?.title,
          description: destinationData?.description,
          imagePath: destinationData?.imagePath,
          price: destinationData?.price,
          latest: destinationData?.latest,
          discount: destinationData?.discount,
          location: destinationData?.location
        };
        this.route.navigate(['/destinations'])
        this.destinations.push(destination1);

        this.destination$.next(this.destinations);

      });
  }
  delete(id: string): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.url}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<any> {
    const options = createRequestOption(req);
    return this.http.get<any[]>(this.url, { params: options, observe: 'response' });
  }


  getSingleData(id: string): Observable<HttpResponse<{}>> {
    return this.http.get(`${this.url}/singledata/${id}`, { observe: 'response' });
  }
  updateSingleData(title: string, image: File, description: string, id: string, latest: string, price: string, discount: string, location: string): void {
    const destinationData = new FormData();
    destinationData.append("title", title);
    if (image) {
      destinationData.append("image", image);

    }
    destinationData.append("description", description);
    destinationData.append("latest", latest);
    destinationData.append("price", price);
    destinationData.append("discount", discount);
    destinationData.append("location", location);

    this.http
      .put<{ destination: Destination }>(`${this.url}/update/${id}`, destinationData)
      .subscribe((destinationData: any) => {
        const model: Destination = {
          _id: destinationData?._id,
          title: destinationData?.title,
          description: destinationData?.description,
          imagePath: destinationData?.imagePath,
          price: destinationData?.price,
          latest: destinationData?.latest,
          discount: destinationData?.discount,
          location: destinationData?.location,
        };
        this.destinations.push(model);

        this.destination$.next(this.destinations);
        this.route.navigate(['/destinations'])

      });
  }


}

