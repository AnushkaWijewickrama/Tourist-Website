import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, Subject } from "rxjs";
import { SERVER_API_URL } from "../util/common-util";
import { createRequestOption } from "../util/request-util";
import { Router } from "@angular/router";
import { Package } from "../models/package";

@Injectable({
  providedIn: "root",
})
export class packageService {
  private packages: any = [];
  private package$ = new Subject<Package[]>();
  readonly url = SERVER_API_URL + "/api/packages";
  readonly bannerUrl = SERVER_API_URL + "/api/banner";

  constructor(private http: HttpClient, private route: Router) { }

  getpackage() {
    this.http
      .get<Package>(this.url)
      .pipe(
        map((packageData) => {
          return packageData;
        })
      )
      .subscribe((packages) => {
        this.packages = packages;
        this.package$.next(this.packages);
      });
  }

  getpackageStream() {
    return this.package$.asObservable();
  }

  addpackage(title: string, image: File, description: string, latest: any, price: string, discount: string): void {
    const packageData = new FormData();
    packageData.append("title", title);
    packageData.append("image", image);
    packageData.append("description", description);
    packageData.append("latest", latest);
    packageData.append("price", price);
    packageData.append("discount", discount);
    this.http
      .post<Package>(this.url, packageData)
      .subscribe((packageData: any) => {
        const package1: Package = {
          _id: packageData?._id,
          title: packageData?.title,
          description: packageData?.description,
          imagePath: packageData?.imagePath,
          price: packageData?.price,
          latest: packageData?.latest,
          discount: packageData?.discount,
        };
        this.route.navigate(['/packages'])
        this.packages.push(package1);

        this.package$.next(this.packages);

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
  updateSingleData(title: string, image: File, description: string, id: string, latest: string, price: string, discount: string): void {
    const packageData = new FormData();
    packageData.append("title", title);
    if (image) {
      packageData.append("image", image);

    }
    packageData.append("description", description);
    packageData.append("latest", latest);
    packageData.append("price", price);
    packageData.append("discount", discount);

    this.http
      .put<{ package: Package }>(`${this.url}/update/${id}`, packageData)
      .subscribe((packageData: any) => {
        const model: Package = {
          _id: packageData?._id,
          title: packageData?.title,
          description: packageData?.description,
          imagePath: packageData?.imagePath,
          price: packageData?.price,
          latest: packageData?.latest,
          discount: packageData?.discount,
        };
        this.packages.push(model);

        this.package$.next(this.packages);
        this.route.navigate(['/packages'])

      });
  }


}

