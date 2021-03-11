import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})

export class CadastrosComponent implements OnInit {
  ELEMENT_DATA: cadastro[];
  displayedColumns: string[] = ['img', 'nome', 'email', 'contato', 'estado', 'action']
  dataSource


  constructor(private route: ActivatedRoute, private cadastroService: CadastroService) {
    this.dataSource = new MatTableDataSource<cadastro>(this.ELEMENT_DATA);
  }
  ngOnInit(): void {
    this.getForm()

  }

  getForm() {
    let resp = this.cadastroService.read();
    resp.subscribe(report => this.dataSource.data = report as cadastro[])

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface cadastro {
  img: string,
  nome: string;
  email: string;
  contato: any;
  estado: string;
  action: string;
}
