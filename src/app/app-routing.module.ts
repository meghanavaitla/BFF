import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WomenComponent } from './women/women.component';
import { BlousesComponent } from './blouses/blouses.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { BottomwearComponent } from './bottomwear/bottomwear.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { JacketsComponent } from './jackets/jackets.component';
import { MenaccessoriesComponent } from './menaccessories/menaccessories.component';
import { ShortsComponent } from './shorts/shorts.component';
import { TraditionalwearComponent } from './traditionalwear/traditionalwear.component';
import { WomenaccessoriesComponent } from './womenaccessories/womenaccessories.component';

const routes: Routes = [
  {path:'blouses',component:BlousesComponent},
  {path:'tshirts',component:TshirtComponent},
  {path:'bottomwear',component:BottomwearComponent},
  {path:'bottoms',component:BottomsComponent},
  {path:'shorts',component:ShortsComponent},
  {path:'traditionalwear',component:TraditionalwearComponent},
  {path:'jackets',component:JacketsComponent},
  {path:'menaccessories',component:MenaccessoriesComponent},
  {path:'womenaccessories',component:WomenaccessoriesComponent},
  {path:'women',component:WomenComponent},
  {path:'men',component:MenComponent},
  {path:'',component:HomeComponent},
  {path:'aboutus',component:HomeComponent},
  {path:'signup',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
