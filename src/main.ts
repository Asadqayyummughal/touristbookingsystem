<<<<<<< HEAD
/// <reference types="@angular/localize" />

=======
>>>>>>> 3b3dba6f7e291378fe455d35bc85dd91b3fe331f
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
