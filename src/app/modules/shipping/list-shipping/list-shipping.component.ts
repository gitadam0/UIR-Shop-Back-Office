import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ShippingService } from 'src/app/services/shipping.service';
import { OrderForm } from 'src/app/models/delivery/delivery.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-shipping',
    templateUrl: './list-shipping.component.html',
    styleUrls: ['./list-shipping.component.css'],
    animations: [
        trigger('toggleAnimation', [
            transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
            transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
        ]),
    ],
})
export class ListShippingComponent implements OnInit {
    @ViewChild('modal1') modal1: any;
    idModel: Number | null = null;
    dataId: number | null = null;
    tableData2: OrderForm[] = [];
    parseClientList: any[] = [];

    getId(arg0: number) {
        this.idModel = arg0;
        this.modal1.open();
    }
    actionClick(id: number) {
        this.dataId = this.dataId == id ? null : id;
    }
    codeArr: any = [];

    constructor(private service: ShippingService, private router:Router) {}
    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        this.service.getAll().subscribe((data) => {
            this.tableData2 = data;
            console.log(this.tableData2.length);
        });
    }

    pars(str: string): string | null {
        if (str == null) {
            return null;
        }

        try {
            const parsedData = JSON.parse(str);
            if (parsedData && parsedData.address) {
                return parsedData.address;
            } else {
                return null;
            }
        } catch (error: any) {
            return null;
        }
    }

    deleteById(id:Number| null){
      this.service.deleteById(id).subscribe({
        next:(result) => {
          // this.router.navigate(['/shipping'])
          this.getAll()
          this.modal1.close()
         console.log('Commande supprimée avec succès', result);
        },
        error:(error) => {
          this.getAll()
          console.error('Erreur lors de la suppression de la commande', error);
        }
    });
    this.modal1.close()
    }
    

    // *-----------------------------------------------------
}
