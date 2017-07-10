import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AskredditComponent } from './askreddit/askreddit.component';
import { MildlyinterestingComponent } from './mildlyinteresting/mildlyinteresting.component';
import { ProgrammerhumorComponent } from './programmerhumor/programmerhumor.component';
import { NosleepComponent } from './nosleep/nosleep.component';
import { OrdercornComponent } from './ordercorn/ordercorn.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    MarketplaceComponent,
    AskredditComponent,
    MildlyinterestingComponent,
    ProgrammerhumorComponent,
    NosleepComponent,
    OrdercornComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
