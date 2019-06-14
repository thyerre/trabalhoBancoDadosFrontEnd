import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model'
import { API_PATH_IMG } from './../../app.api'

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {
  cliente: Cliente;
  form: FormGroup;
  img: string = 'assets/img/user/padrao.png';
  loader: boolean = true;
  selectedFile: File


  constructor(private clienteService: ClienteService, private formBuilder: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit() {
    this.initializeFormEmpty();
    this.getCliente();
  }
  getCliente() {
    this.clienteService.clienteById(this.router.snapshot.params['id']).subscribe(cliente => {
      this.cliente = cliente
      if (cliente.img) {
        this.img = `${API_PATH_IMG}/cliente/${cliente.img}`
      }
      this.initializeForm(this.cliente)
      this.loader = false
    });
  }

  initializeForm(cliente) {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(cliente.id, [Validators.required]),
      nome: this.formBuilder.control(cliente.nome, [Validators.required]),
      fileimg: this.formBuilder.control(''),
      bo_ativo: this.formBuilder.control(cliente.bo_ativo),
      cpf: this.formBuilder.control(cliente.cpf),
      endereco: this.formBuilder.control(cliente.endereco),
      telefone: this.formBuilder.control(cliente.telefone),
      pessoa_referencia: this.formBuilder.control(cliente.pessoa_referencia),
      email: this.formBuilder.control(cliente.email),
      dt_nascimento: this.formBuilder.control(cliente.dt_nascimento)

    })
  }
  initializeFormEmpty() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required]),
      nome: this.formBuilder.control('', [Validators.required]),
      fileimg: this.formBuilder.control(''),
      bo_ativo: this.formBuilder.control(''),
      cpf: this.formBuilder.control(''),
      endereco: this.formBuilder.control(''),
      telefone: this.formBuilder.control(''),
      pessoa_referencia: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      dt_nascimento: this.formBuilder.control('')
    })
  }
  update(form) {
    const uploadData = new FormData();
    if (this.selectedFile) {

      uploadData.append('fileimg', this.selectedFile, this.selectedFile.name);
      this.clienteService.save(uploadData)
        .subscribe(data => {
          form.fileimg = data.file
          this.updateForm(form)

        }
          ,
          response => {
            if (response.status === 401) {
              this.clienteService.notify("não foi possivel salvar");
            } if (response.status === 0) {
              this.clienteService.notify("SERVIDOR OFFILINE");
            }
          },
          () => {
          })
    } else {
      this.updateForm(form)
    }
  }

  updateForm(form) {
    this.clienteService.update(form, form.id)
      .subscribe(data => {
        this.clienteService.notify(data['response']);
        this.clienteService.goTo()

      },

        response => {
          if (response.status === 401) {
            this.clienteService.notify("não foi possivel salvar");
          } if (response.status === 0) {
            this.clienteService.notify("SERVIDOR OFFILINE");
          }

        },
        () => {
        })
  }
  getExtension(name) {
    return name.split('.').pop();
  }
  onFileChanged(event) {
    var tmppath = URL.createObjectURL(event.target.files[0]);
    switch (this.getExtension(event.target.files[0].name)) {
      case 'pdf': {
        this.img = 'assets/img/file/pdf.svg'
        break;
      }
      case 'txt': {
        this.img = 'assets/img/file/txt.svg'
        break;
      }
      case 'pptx': case 'ppt': case 'pps': {
        this.img = 'assets/img/file/ppt.svg'
        break;
      }
      case 'xls': case 'xlsx': {
        this.img = 'assets/img/file/xls.svg'
        break;
      }
      case "doc": case "docx": case "dotx": case "dot": {
        this.img = 'assets/img/file/docs.svg'
        break;
      }
      default: {
        this.img = tmppath;
        break;
      }

    }
    this.selectedFile = event.target.files[0];
  }

}
