import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculateScoreFormComponent } from './components/calculate-score-form/calculate-score-form.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { ScoreResultComponent } from './components/score-result/score-result.component';
import { ScoreBarComponent } from './components/score-bar/score-bar.component';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  allowNegative: false,  
  precision: 0,
  prefix: "",
  align: "right",
  decimal: ".",
  suffix: "",
  thousands: ","
};

@NgModule({
  declarations: [
    AppComponent,
    CalculateScoreFormComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    CardComponent,
    ScoreResultComponent,
    ScoreBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    CurrencyMaskModule
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
