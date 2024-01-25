import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tarefa: string = "";
  tarefas: any[] =
  [
    { nome: 'Tarefa 1', selecionada: false },
    { nome: 'Tarefa 2', selecionada: false },
    { nome: 'Tarefa 3', selecionada: false }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  adicionar(){
    this.tarefas.push({nome: this.tarefa});
    this.tarefa = "";
  }

  remover(index: number){
    this.tarefas.splice(index, 1)
  }

  concluir(tarefa: any){
    tarefa.selecionada = !tarefa.selecionada;
  }

  todasTarefasConcluidas(): boolean {
    return this.tarefas.every(tarefa => tarefa.selecionada);
  }

}
