import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IShortenedUrl } from '../model/shorten.model';

@Injectable({
  providedIn: 'root',
})
export class ShortlyService {
  constructor(private http: HttpClient) {}
  getUrlData(URL: string): Observable<IShortenedUrl> {
    return this.http.get<IShortenedUrl>(environment.ShortenedApiBaseUrl, {
      params: new HttpParams().set('url', URL),
    });
  }
}
