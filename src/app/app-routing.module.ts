import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { IcecreamsComponent } from './Icecreams/icecreams/icecreams.component';
import { ListofmenuComponent } from './ListOfMenu/listofmenu/listofmenu.component';
import { MaincourseComponent } from './MainCourse/maincourse/maincourse.component';
import { SnscksModule } from './Snacks/snscks/snscks.module';
import { SoftdrinksComponent } from './SoftDrinks/softdrinks/softdrinks.component';
import { SoupsComponent } from './Soups/soups/soups.component';
import { StartersComponent } from './Starters/starters/starters.component';

const routes: Routes = [
  {path:"listOfMenu",component:ListofmenuComponent},
  {path:"Home",component:HomeComponent},
  {path:"Soups",component:SoupsComponent},
  {path:"Starters",component:StartersComponent},
  {path:"Snacks",component:SnscksModule},
  {path:"MainCourse",component:MaincourseComponent},
  {path:"SoftDrinks",component:SoftdrinksComponent},
  {path:"IceCreams",component:IcecreamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
