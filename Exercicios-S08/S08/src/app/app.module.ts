import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { RadioBoxComponent } from './components/radio-box/radio-box.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ButtonBoxComponent } from './components/button-box/button-box.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    InputBoxComponent,
    SelectBoxComponent,
    RadioBoxComponent,
    ModalComponent,
    NavbarComponent,
    ItemCardComponent,
    ButtonBoxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
