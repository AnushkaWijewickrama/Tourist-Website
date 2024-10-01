import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { ScrollToTopService } from './shared/util/ScrollToTopService';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),
  provideHttpClient(withFetch()),
  provideRouter(
    routes,
    withInMemoryScrolling({
      scrollPositionRestoration: "top",
    })
  ),
    ScrollToTopService]
};
