import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-tabla',
  templateUrl: './prueba-tabla.component.html',
  styleUrls: ['./prueba-tabla.component.css']
})
export class PruebaTablaComponent implements OnInit {

  productos = [
    {
      nombre: 'Apple MacBook Pro 17"',
      color: 'Silver',
      categoria: 'Laptop',
      precio: 2999,
    },
    {
      nombre: 'Microsoft Surface Pro',
      color: 'White',
      categoria: 'Laptop PC',
      precio: 1999,
    },
    {
      nombre: 'Magic Mouse 2',
      color: 'Black',
      categoria: 'Accessories',
      precio: 99,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
