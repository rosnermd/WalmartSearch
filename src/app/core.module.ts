import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppMaterialModule } from './app.material.module';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        CommonModule,
        FormsModule,
        MainRoutingModule,
        HttpClientModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        AppMaterialModule
    ],
    exports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        CommonModule,
        FormsModule,
        MainRoutingModule,
        HttpClientModule,
        ToastrModule,
        AppMaterialModule
    ],
    providers: [],
    bootstrap: []
})
export class CoreModule { }
