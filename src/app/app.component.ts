import { CommonModule, isPlatformServer, isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, makeStateKey, PLATFORM_ID, TransferState } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SERVER_API_URL } from './shared/util/common-util';
const dataKey = makeStateKey<{ data: string }>("data")

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tourist_Website';

  bindingData?: { data: string };
  constructor(@Inject(PLATFORM_ID) private platformID: Object, private httpClient: HttpClient, private transferState: TransferState) {

  }
  ngOnInit(): void {
    if (isPlatformServer(this.platformID)) { //<--- this block run on server
      console.log("this block runs only on server");
      this.httpClient.get(SERVER_API_URL + "/api").subscribe((r: any) => {
        this.bindingData = r;
        this.transferState.set(dataKey, r); //<--- add this line to save the state
        console.log("data is rendered", r);
      })
    }
    else if (isPlatformBrowser(this.platformID)) {
      console.log("this block runs only on client");
      console.log("client site retrived data before ", this.bindingData)
      this.bindingData = this.transferState.get<{ data: string }>(dataKey, { data: "" });
      console.log("client site retrived data after ", this.bindingData)
    }
  }
}
