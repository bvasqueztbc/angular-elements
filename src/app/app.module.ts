import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { FrameworkVoteComponent } from './framework-vote/framework-vote.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameworkVoteComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents : [
    FrameworkVoteComponent
  ],
  providers: [],
})
export class AppModule { 
  constructor(private injector : Injector){
  }

  ngDoBootstrap(){
    const el = createCustomElement(FrameworkVoteComponent, {injector : this.injector});
    customElements.define('framework-vote',el);
  }
}
