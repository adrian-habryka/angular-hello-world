import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldBindingsComponent } from './hello-world-bindings/hello-world-bindings.component';
import { HelloWorldNgifComponent } from './hello-world-ngif/hello-world-ngif.component';
import { HelloWorldDiComponent } from './hello-world-di/hello-world-di.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldBindingsComponent,
    HelloWorldNgifComponent,
    HelloWorldDiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
