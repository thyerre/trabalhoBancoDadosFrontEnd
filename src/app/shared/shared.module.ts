import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { InputComponent } from './input/input.component'
import { RadioComponent } from './radio/radio.component'
import { TextMaskModule } from 'angular2-text-mask';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { SnackbarComponent } from './messages/snackbar/snackbar.component'
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import { CurrencyMaskModule } from "ng2-currency-mask";
import { NotificationService } from './messages/notification.service'
import { LoginService } from '../security/login/login.service'
// import {RefreshTokenInterceptor }from '../security/refresh-token.interceptor'


//service
// import {MenuService} from '../menu/menu.service'

// pipes
import { EncryptPipe } from '../pipes/encrypt.pipe';
import { SafeHtml } from '../pipes/safe-html.pipe';
import { ImagemTipoarquivoPipe } from '../pipes/imagem-tipoarquivo.pipe';
import { BooleanMessagePipe } from '../pipes/boolean-message.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule,MAT_DATE_LOCALE} from '@angular/material'
import { Helper } from '../helper';


@NgModule({
    declarations: [
        InputComponent,
        RadioComponent,
        SnackbarComponent,
        EncryptPipe,
        SafeHtml,
        ImagemTipoarquivoPipe,
        BooleanMessagePipe
    ],
    
    imports: [
        TextMaskModule,
        MatDatepickerModule,
        MatNativeDateModule,
        CommonModule,
        FormsModule,
        CurrencyMaskModule,
        ReactiveFormsModule,
        AngularFontAwesomeModule
    ],
    exports: [
        TextMaskModule,
        InputComponent,
        MatDatepickerModule,
        MatNativeDateModule,
        AngularFontAwesomeModule,
        CurrencyMaskModule,
        RadioComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SnackbarComponent,
        EncryptPipe,
        SafeHtml,
        BooleanMessagePipe,
        ImagemTipoarquivoPipe
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers:[
                NotificationService,
                LoginService,
                Helper,
                {provide: MAT_DATE_LOCALE, useValue: 'pt-br' }

            ]
        }
    }
}