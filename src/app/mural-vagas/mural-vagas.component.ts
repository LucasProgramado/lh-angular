import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
//import { threadId } from 'worker_threads';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {


  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
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
