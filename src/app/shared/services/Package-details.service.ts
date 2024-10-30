import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, Subject } from "rxjs";
import { SERVER_API_URL } from "../util/common-util";
import { createRequestOption } from "../util/request-util";
import { Router } from "@angular/router";
import { PackageDetails } from "../models/PackageDetails";
@Injectable({
  providedIn: "root",
})
export class PackageSingleService {
  private Packages: any = [];
  private Package$ = new Subject<PackageDetails[]>();
  readonly url = SERVER_API_URL + "/api/packagedetails";
  constructor(private http: HttpClient, private router: Router) { }

  getPackage() {
    this.http
      .get<PackageDetails>(this.url)
      .pipe(
        map((PackageData) => {
          return PackageData;
        })
      )
      .subscribe((Packages) => {
        this.Packages = Packages;
        this.Package$.next(this.Packages);
      });
  }

  getPackageStream() {
    return this.Package$.asObservable();
  }
  addPackage(title: string, image: any, description: string, longDescription: any): void {
    const PackageData = new FormData();
    PackageData.append("title", title);
    PackageData.append("longDescription", longDescription);
    Object.keys(image).forEach(element => {
      PackageData.append("image", image[element].image);
    });
    PackageData.append("description", description);
    this.http
      .post<PackageDetails>(this.url, PackageData)
      .subscribe((PackageData: any) => {
        const Package: any = {
          _id: PackageData?._id,
          title: PackageData?.title,
          description: PackageData?.description,
          imagePath: PackageData?.imagePath,
          brand: PackageData?.brand,
        };
        this.Packages.push(Package);

        this.Package$.next(this.Packages);
        this.router.navigate(['/Packagedetails'])
      });
  }
  delete(id: string): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.url}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<any> {
    const options = createRequestOption(req);
    return this.http.get<any[]>(this.url, { params: options, observe: 'response' });
  }
  updateSingleData(title: string, image: any, description: string, longDescription: any, id: string): void {
    const PackageData = new FormData();
    PackageData.append("title", title);
    PackageData.append("longDescription", longDescription);
    if (image) {
      Object.keys(image).forEach(element => {
        PackageData.append("image", image[element].image);
      });
    }

    PackageData.append("description", description);
    this.http
      .put<{ packageDetails: PackageDetails }>(`${this.url}/update/${id}`, PackageData)
      .subscribe((PackageData: any) => {
        const Package: any = {
          _id: PackageData?._id,
          title: PackageData?.title,
          description: PackageData?.description,
          imagePath: PackageData?.imagePath,
          brand: PackageData?.brand,
        };
        this.Packages.push(Package);

        this.Package$.next(this.Packages);
        this.router.navigate(['/Packagedetails'])
      });
  }
  getSingleData(id: string): Observable<HttpResponse<{}>> {
    return this.http.get(`${this.url}/singledata/${id}`, { observe: 'response' });
  }

}
