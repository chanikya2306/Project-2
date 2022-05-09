import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { SidenavbarComponent } from './SideNavbar/sidenavbar/sidenavbar.component';
import { RightsidenavbarComponent } from './RightSideNavBar/rightsidenavbar/rightsidenavbar.component';
import { BodyComponent } from './Body/body/body.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { ListofmenuComponent } from './ListOfMenu/listofmenu/listofmenu.component';
import { HomeComponent } from './Home/home/home.component';
import { SoupsComponent } from './Soups/soups/soups.component';
import { StartersComponent } from './Starters/starters/starters.component';
import { SnscksComponent } from './Snacks/snscks/snscks.component';
import { MaincourseComponent } from './MainCourse/maincourse/maincourse.component';
import { SoftdrinksComponent } from './SoftDrinks/softdrinks/softdrinks.component';
import { IcecreamsComponent } from './Icecreams/icecreams/icecreams.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavbarComponent,
    RightsidenavbarComponent,
    BodyComponent,
    FooterComponent,
    ListofmenuComponent,
    HomeComponent,
    SoupsComponent,
    StartersComponent,
    SnscksComponent,
    MaincourseComponent,
    SoftdrinksComponent,
    IcecreamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
