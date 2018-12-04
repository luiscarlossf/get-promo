import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadintePage } from './cadinte';

@NgModule({
  declarations: [
    CadintePage,
  ],
  imports: [
    IonicPageModule.forChild(CadintePage),
  ],
})
export class CadintePageModule {}
