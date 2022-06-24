import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lista = [{
    ID:0,
    email:'nome@gmail.com',
    idade: 25,
    endereco: 'Av. X, 101',
    telefone: 43900000000
    }]

  textoID = 0
  textoEmail = 'nome@gmail.com'
  textoIdade = 25
  textoEndereco = 'Av. X, 101'
  textoTelefone = 43900000000

  insert(){
    this.lista.push({ID:this.textoID, email:this.textoEmail, idade:this.textoIdade, endereco:this.textoEndereco, telefone:this.textoTelefone})
  }

  remove(){
    this.lista.pop
  }

  constructor() {}

}