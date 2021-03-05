import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { AuthPagesService } from './service/authPages.service';


const MODULES = [
  CommonModule,
];

const SERVICES = [
  AuthService,
  AuthPagesService
];

@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ],
  providers: [
    ...SERVICES
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded.Import Core modules in the AppModule only.`);
    }
  }
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
      ],
    };
  }
}
