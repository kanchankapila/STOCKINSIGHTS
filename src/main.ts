import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { AppRoutingModule } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideServiceWorker } from '@angular/service-worker';
import { environment } from './environments/environment';
import { CustomPreloadingStrategy } from './app/custom-preloading-strategy';
import { provideHttpClient } from '@angular/common/http';
import { DataapiService } from './app/dataapi.service';
import 'zone.js';
import 'hammerjs';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('ORg4AjUWIQA/Gnt2U1hhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5Ud0xiWX9ddH1VQGJd');

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(AppRoutingModule.routes),
    provideAnimations(),
    CustomPreloadingStrategy,
    provideHttpClient(),
    DataapiService,
    provideServiceWorker('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
}).catch(err => console.error(err));

