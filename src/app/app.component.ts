import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';

  listaDeCompra!: Array<Item>; // Item foi definido pela interface.
  itemParaSerEditado!: Item;


  constructor(
    private listaService: ListaDeCompraService  // Declarado um atributo lista Service do tipo ListaDeCompraService para podermos hookar o método necessário getListaDeCompra.
  ) { }

  ngDoCheck(){
    this.listaService.atualizarLocalStorage();
  }

  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra();
    return console.log(this.listaDeCompra);
  }

  editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }

  deletarItem(id: number){
    const index = this.listaDeCompra.findIndex((item)=>item.id === id);
    this.listaDeCompra.splice(index, 1);
  }

  limparLista(){
    this.listaDeCompra = [];
    this.listaService.atualizarLocalStorage();

  }

}


