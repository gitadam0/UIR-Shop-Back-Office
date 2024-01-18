import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateClientComponent} from './create-client/create-client.component';
import {EditClientComponent} from './edit-client/edit-client.component';
import {ListClientComponent} from './list-client/list-client.component';
import {ViewClientComponent} from './view-client/view-client.component';
import {ClientComponent} from "./client.component";


@NgModule({
    declarations: [
        ClientComponent,
        CreateClientComponent,
        EditClientComponent,
        ListClientComponent,
        ViewClientComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ClientModule {
}
