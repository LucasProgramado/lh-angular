import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  public vaga: Vaga = new Vaga(0, "", "", "", 0);
  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  cadastrar() {
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      vaga => { this.vaga = new Vaga(0, "", "", "", 0) },
      err => { console.log("erro ao cadastrar") }
    );

    window.location.href = "/mural";

  }

  atualizar(id: number) {
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      vaga => { this.vaga = new Vaga(0, "", "", "", 0) },
      err => { console.log("erro ao atualizar") }
    );

    window.location.href = "/mural";

  }

  deletar(id: number) {
    this._vagasService.deletarVaga(id).subscribe(
      vaga => { this.vaga = new Vaga(0, "", "", "", 0) },
      err => { console.log("erro ao deletar") }
    );

    window.location.href = "/mural";


  }

  listarVagas() {
    this._vagasService.getVagas().subscribe(
      retornaVagas => {
        this.vagas = retornaVagas.map(
          item => {
            return new Vaga(
              item.id,
              item.nome,
              item.foto,
              item.descricao,
              item.salario
            );
          }
        )
      }
    )
  }

}
