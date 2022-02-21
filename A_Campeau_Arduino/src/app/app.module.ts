import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentFilterPipe } from './content-filter.pipe';
import { HoverEffectDirective } from './hover-effect.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentFilterPipe,
    HoverEffectDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
