import { Component, OnInit } from '@angular/core';
import { Projeto } from '../../../common/projeto';
import { ProjetoService } from './projeto.service';

@Component({
    selector: 'projetos',
    templateUrl: './projetos.component.html',
    styleUrls: ['./projetos.component.css']
  })
  
  export class ProjetosComponent implements OnInit {
    projetos: Projeto[] = []
    projeto: Projeto = new Projeto();
    nomeDuplicado: boolean = false;

    constructor(private projetoService: ProjetoService) {}

    onMove(): void {
      this.nomeDuplicado = false;
    };

    ngOnInit() {
        this.projetoService.getProjetos()
            .subscribe(
              as => { this.projetos = as.map(a => {
                  return {
                      ...a,
                      criacao: new Date(a.criacao),
                      conclusao: a.conclusao? new Date(a.conclusao) : null
                  }
              })
            },
              msg => { alert(msg.message); }
              );
    }
}