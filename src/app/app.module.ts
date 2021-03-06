import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { MediaCapture/*, MediaFile, CaptureError, CaptureImageOptions*/ } from '@ionic-native/media-capture';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ViewAccidentsPage } from '../pages/view-accidents/view-accidents';
import { ReportAccidentPage } from '../pages/report-accident/report-accident';
import { AccidentProvider } from '../providers/accident/accident';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastProvider } from '../providers/toast/toast';
import { AccidentPage } from '../pages/accident/accident';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReportAccidentPage,
    ViewAccidentsPage,
    AccidentPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ReportAccidentPage,
    ViewAccidentsPage,
    AccidentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    MediaCapture,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccidentProvider,
    ToastProvider
  ]
})
export class AppModule {}
