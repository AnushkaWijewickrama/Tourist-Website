import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { SERVER_API_URL } from '../util/common-util';
import { Testimonial } from '../models/testimonial';

export type EntityResponseType = HttpResponse<Testimonial>;
export type EntityArrayResponseType = HttpResponse<Testimonial[]>;

@Injectable({ providedIn: 'root' })
export class TestimonialService {
  protected resourceUrl = SERVER_API_URL + '/api/testimonials';

  constructor(protected http: HttpClient) { }

  create(books: Testimonial): Observable<EntityResponseType> {
    return this.http.post<Testimonial>(this.resourceUrl, books, { observe: 'response' });
  }
  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<Testimonial[]>(this.resourceUrl + '/public', { params: options, observe: 'response' });
  }

}
