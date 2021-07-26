import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  searchTerm: string;
  lugares = [
    {
      "nome": "Mercado Municipal",
      "caminho":"mercado"
    },
    {
      "nome": "Parque do Centenário",
      "caminho":"centenario"
    },
    {
      "nome": "Praça da Catedral",
      "caminho":"catedral"
    },
    {
      "nome": "Praça da Matriz",
      "caminho":"matriz"
    },
  ];

  

  constructor() { }

  ngOnInit() {
  }

}
