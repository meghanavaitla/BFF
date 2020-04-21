import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BlousesComponent } from './blouses/blouses.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { BottomwearComponent } from './bottomwear/bottomwear.component';
import { JacketsComponent } from './jackets/jackets.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { MenaccessoriesComponent } from './menaccessories/menaccessories.component';
import { RegisterComponent } from './register/register.component';
import { ShortsComponent } from './shorts/shorts.component';
import { TraditionalwearComponent } from './traditionalwear/traditionalwear.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { WomenComponent } from './women/women.component';
import { WomenaccessoriesComponent } from './womenaccessories/womenaccessories.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    BlousesComponent,
    NavComponent,
    CartComponent,
    BottomsComponent,
    BottomwearComponent,
    JacketsComponent,
    LoginComponent,
    MenComponent,
    MenaccessoriesComponent,
    RegisterComponent,
    ShortsComponent,
    TraditionalwearComponent,
    TshirtComponent,
    WomenComponent,
    WomenaccessoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
