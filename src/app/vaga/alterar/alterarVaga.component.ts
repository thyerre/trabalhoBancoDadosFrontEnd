import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VagaService } from '../vaga.service';
import { API_PATH_IMG } from '../../app.api';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterarVaga.component.html',
  styleUrls: ['./alterarVaga.component.css']
})
export class AlterarVagaComponent implements OnInit {
  fornecedor: any;
  form: FormGroup;
  img: 'assets/img/user/padrao.png';
  selectedFile: File;
  loader: true;

  constructor(private vagaService: VagaService, private formBuilder: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit() {
    this.initializeFormEmpty();
    this.getFornecedor();
  }
  getFornecedor() {
    this.vagaService.produtoById(this.router.snapshot.params['id']).subscribe(fornecedor => {
      this.fornecedor = fornecedor;
      this.initializeForm(this.fornecedor);
    });
  }

  initializeForm(fornecedor) {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(fornecedor.id, [Validators.required]),
      endereco: this.formBuilder.control(fornecedor.endereco, [Validators.required]),
      razao_social: this.formBuilder.control(fornecedor.razao_social, [Validators.required]),
      nome_contato: this.formBuilder.control(fornecedor.nome_contato, [Validators.required]),
      pais: this.formBuilder.control(fornecedor.pais),
      ins_est: this.formBuilder.control(fornecedor.ins_est),
      nome_fantasia: this.formBuilder.control(fornecedor.nome_fantasia, [Validators.required]),
      cnpj: this.formBuilder.control(fornecedor.cnpj, [Validators.required]),
      observacao: this.formBuilder.control(fornecedor.observacao),
      telefone: this.formBuilder.control(fornecedor.telefone)
    });

  }
  initializeFormEmpty() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(''),
      endereco: this.formBuilder.control('', [Validators.required]),
      razao_social: this.formBuilder.control('', [Validators.required]),
      nome_contato: this.formBuilder.control(''),
      pais: this.formBuilder.control(''),
      ins_est: this.formBuilder.control(''),
      nome_fantasia: this.formBuilder.control(''),
      cnpj: this.formBuilder.control(''),
      observacao: this.formBuilder.control(''),
      telefone: this.formBuilder.control('')
    });
  }

  update(form) {
    this.vagaService.update(form, form.id)
      .subscribe(data => {
        this.vagaService.notify(data['response']);
        this.loader = true;
      });
    }
}
