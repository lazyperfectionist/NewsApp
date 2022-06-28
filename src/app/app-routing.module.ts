import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { TopheadingComponent } from "./topheading/topheading.component";

const routes: Routes = [
    {path: '',  component:TopheadingComponent}, //Top heading/Home
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }