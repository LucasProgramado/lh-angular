import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service'

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  public vaga: Vaga = new Vaga(0, "", "", "", 0);
  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      vaga => { this.vaga = new Vaga(0, "", "", "", 0) },
      err => { console.log("erro ao cadastrar") }
    );

    window.location.href = "/cadastrar";

  }

  atualizar(id: number) {
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      vaga => { this.vaga = new Vaga(0, "", "", "", 0) },
      err => { console.log("erro ao atualizar") }
    );

    window.location.href = "/cadastrar";

  }

  deletar(id: number) {
    this._vagasService.deletarVaga(id).subscribe(
      vaga => { this.vaga = new Vaga(0, "", "", "", 0) },
      err => { console.log("erro ao deletar") }
    );

    window.location.href = "/cadastrar";
  }




}
