import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, Subject } from "rxjs";
import { SERVER_API_URL } from "../util/common-util";
import { createRequestOption } from "../util/request-util";
import { Router } from "@angular/router";
import { Product } from "../models/product copy";

@Injectable({
  providedIn: "root",
})
export class ProductSingleService {
  private products: any = [];
  private product$ = new Subject<Product[]>();
  readonly url = SERVER_API_URL + "/api/productsingle";
  constructor(private http: HttpClient, private router: Router) { }

  getProduct() {
    this.http
      .get<Product>(this.url)
      .pipe(
        map((productData) => {
          return productData;
        })
      )
      .subscribe((products) => {
        this.products = products;
        this.product$.next(this.products);
      });
  }

  getProductStream() {
    return this.product$.asObservable();
  }
  addProduct(title: string, image: any, description: string, longDescription: any): void {
    const productData = new FormData();
    productData.append("title", title);
    productData.append("longDescription", longDescription);
    Object.keys(image).forEach(element => {
      productData.append("image", image[element].image);
    });
    productData.append("description", description);
    this.http
      .post<Product>(this.url, productData)
      .subscribe((productData: any) => {
        const product: any = {
          _id: productData?._id,
          title: productData?.title,
          description: productData?.description,
          imagePath: productData?.imagePath,
          brand: productData?.brand,
        };
        this.products.push(product);

        this.product$.next(this.products);
        this.router.navigate(['/productSingle'])
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
    const productData = new FormData();
    productData.append("title", title);
    productData.append("longDescription", longDescription);
    if (image) {
      Object.keys(image).forEach(element => {
        productData.append("image", image[element].image);
      });
    }

    productData.append("description", description);
    this.http
      .put<{ brand: Product }>(`${this.url}/update/${id}`, productData)
      .subscribe((productData: any) => {
        const product: any = {
          _id: productData?._id,
          title: productData?.title,
          description: productData?.description,
          imagePath: productData?.imagePath,
        };
        this.products.push(product);

        this.product$.next(this.products);
        this.router.navigate(['/productSingle'])
      });
  }
  getSingleData(id: string): Observable<HttpResponse<{}>> {
    return this.http.get(`${this.url}/singledata/${id}`, { observe: 'response' });
  }

}
