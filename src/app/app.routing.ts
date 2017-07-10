import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AskredditComponent }   from './askreddit/askreddit.component';
import { MildlyinterestingComponent }   from './mildlyinteresting/mildlyinteresting.component';
import { ProgrammerhumorComponent }   from './programmerhumor/programmerhumor.component';
import { NosleepComponent }   from './nosleep/nosleep.component';
import { OrdercornComponent }   from './ordercorn/ordercorn.component';

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'askreddit',
    component: AskredditComponent
  },
  {
    path: 'mildlyinteresting',
    component: MildlyinterestingComponent
  },
  {
    path: 'programmerhumor',
    component: ProgrammerhumorComponent
  },
  {
    path: 'nosleep',
    component: NosleepComponent
  },
  {
    path: 'ordercorn',
    component: OrdercornComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
