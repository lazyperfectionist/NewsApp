import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { TechnewsComponent } from "./technews/technews.component";
import { TopheadingComponent } from "./topheading/topheading.component";
import { BusinessComponent } from "./business/business.component";
import { SportsComponent } from "./sports/sports.component";

const routes: Routes = [
    {path: '',  component:TopheadingComponent}, //Top heading
    {path: 'home',  component:TopheadingComponent} ,  //Top heading / home
    {path: 'technology',  component:TechnewsComponent},   //Tech News /tech
    {path: 'business',  component:BusinessComponent},   //Business News / business
    {path: 'sports',  component:SportsComponent},   //Sports News / sports
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }