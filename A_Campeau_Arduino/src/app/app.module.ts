import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentFilterPipe } from './content-filter.pipe';
import { HoverEffectDirective } from './hover-effect.directive';
import { AppMessagesComponent } from './app-messages/app-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentFilterPipe,
    HoverEffectDirective,
    AppMessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
