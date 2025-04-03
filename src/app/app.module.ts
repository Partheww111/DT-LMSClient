import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { CuttingEdgeComponent } from './Components/landing-page/cutting-edge/cutting-edge.component';
import { PowerfulComponent } from './Components/landing-page/powerful/powerful.component';
import { InteractivComponent } from './Components/landing-page/interactiv/interactiv.component';
import { ExperianceComponent } from './Components/landing-page/experiance/experiance.component';
import { OurToolComponent } from './Components/landing-page/our-tool/our-tool.component';
import { CommunityComponent } from './Components/landing-page/community/community.component';
import { LandingFooterComponent } from './Components/landing-page/landing-footer/landing-footer.component';
import { UserListComponent } from './Components/User/user-list/user-list.component';
import { CreateUserComponent } from './Components/User/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent,
    LandingPageComponent,
    CuttingEdgeComponent,
    PowerfulComponent,
    InteractivComponent,
    ExperianceComponent,
    OurToolComponent,
    CommunityComponent,
    LandingFooterComponent,
    UserListComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
