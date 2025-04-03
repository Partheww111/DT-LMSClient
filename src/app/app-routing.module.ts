import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { CuttingEdgeComponent } from './Components/landing-page/cutting-edge/cutting-edge.component';
import { PowerfulComponent } from './Components/landing-page/powerful/powerful.component';
import { InteractivComponent } from './Components/landing-page/interactiv/interactiv.component';
import { ExperianceComponent } from './Components/landing-page/experiance/experiance.component';
import { OurToolComponent } from './Components/landing-page/our-tool/our-tool.component';
import { CommunityComponent } from './Components/landing-page/community/community.component';
import { LandingFooterComponent } from './Components/landing-page/landing-footer/landing-footer.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  //{path:'productAdd',component:AddProductComponent},
  //{path:'productEdit/:id',component:EditProductComponent},
  //{
  //  path: '',
  //  component: LandingPageComponent,
  // // children: [
  // //   { path: '', component: CuttingEdgeComponent },
  // //   { path: '', component: PowerfulComponent },
  // //   { path: '', component: InteractivComponent },
  // //   { path: '', component: ExperianceComponent },
  // //   { path: '', component: OurToolComponent },
  // //   { path: '', component: CommunityComponent },
  // //   { path: '', component: LandingFooterComponent },
  // // ]
  //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
