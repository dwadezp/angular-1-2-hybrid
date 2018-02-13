import myJsApp from './script.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { UpgradeModule } from '@angular/upgrade/static';


platformBrowserDynamic().bootstrapModule(AppModule)

 .then(platformRef => {
  console.log("BOOTSTRAPING AngularJS");
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, [myJsApp.name], {strictDi: true});
});



/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/