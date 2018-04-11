import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';
import { CupComponent } from './cup/cup.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    TeamComponent,
    TeamsComponent,
    CupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
