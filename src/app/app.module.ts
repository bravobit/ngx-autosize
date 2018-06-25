import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxAutosizeModule} from '@bravobit/ngx-autosize';

import {AppComponent} from './app.component';

@NgModule({
    imports: [BrowserModule, NgxAutosizeModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
