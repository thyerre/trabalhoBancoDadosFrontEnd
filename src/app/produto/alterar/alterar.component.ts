import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model'
import { API_PATH_IMG } from './../../app.api'

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {
  produto: Produto;
  form: FormGroup;
  img: string = 'assets/img/user/padrao.png';
  loader: boolean = true;
  selectedFile: File

  constructor(private produtoService: ProdutoService, private formBuilder: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit() {
    this.initializeFormEmpty();
    this.getProduto();
  }
  getProduto() {
    this.produtoService.produtoById(this.router.snapshot.params['id']).subscribe(produto => {
      this.produto = produto
      if (produto.img) {
        this.img = `${API_PATH_IMG}/produto/${produto.img}`
      }
      this.initializeForm(this.produto)
      this.loader = false
    });
  }

  initializeForm(produto) {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(produto.id, [Validators.required]),
      ds_produto: this.formBuilder.control(produto.ds_produto, [Validators.required]),
      nu_referencia: this.formBuilder.control(produto.nu_referencia, [Validators.required]),
      fabricante: this.formBuilder.control(produto.fabricante, [Validators.required]),
      vl_venda: this.formBuilder.control(produto.vl_venda),
      vl_custo: this.formBuilder.control(produto.vl_custo),
      dt_lancamento: this.formBuilder.control(produto.dt_lancamento),
      cores: this.formBuilder.control(produto.cores),
      fornecedor: this.formBuilder.control(produto.fornecedor),
      observacao: this.formBuilder.control(produto.observacao),
      fileimg: this.formBuilder.control(''),
      bo_ativo: this.formBuilder.control(produto.bo_ativo) 
    })
  }
  initializeFormEmpty() {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required]),
      ds_produto: this.formBuilder.control('', [Validators.required]),
      nu_referencia: this.formBuilder.control('', [Validators.required]),
      fabricante: this.formBuilder.control('', [Validators.required]),
      vl_venda: this.formBuilder.control(''),
      vl_custo: this.formBuilder.control(''),
      dt_lancamento: this.formBuilder.control(''),
      cores: this.formBuilder.control(''),
      fornecedor: this.formBuilder.control(''),
      observacao: this.formBuilder.control(''),
      fileimg: this.formBuilder.control(''),
      bo_ativo: this.formBuilder.control('') 

    })
  }
  update(form) {
    const uploadData = new FormData();
    if (this.selectedFile) {

      uploadData.append('fileimg', this.selectedFile, this.selectedFile.name);
      this.produtoService.save(uploadData)
        .subscribe(data => {
          form.fileimg = data.file
          this.updateForm(form)

        }
          ,
          response => {
            if (response.status === 401) {
              this.produtoService.notify("não foi possivel salvar");
            } if (response.status === 0) {
              this.produtoService.notify("SERVIDOR OFFILINE");
            }

          },//httpErrorResponse
          () => {
          })
    } else {
      this.updateForm(form)
    }
  }

  updateForm(form) {
    this.produtoService.update(form, form.id)
      .subscribe(data => {
        this.produtoService.notify(data['response']);
        this.produtoService.goTo()
      },
        response => {
          if (response.status === 401) {
            this.produtoService.notify("não foi possivel salvar");
          } if (response.status === 0) {
            this.produtoService.notify("SERVIDOR OFFILINE");
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
