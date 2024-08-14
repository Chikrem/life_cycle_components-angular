import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges{

  @Input() item!: Item  // Com essa propriedado podemos atribuir valores a esta instacia através, por exemplo, de property binding. Item irá receber os valores de atributos da base de dados.

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnChanges(): void {
    console.log("OnChanges")
  }

  ngOnInit(): void {
    console.log("OnInit")
   }

}
