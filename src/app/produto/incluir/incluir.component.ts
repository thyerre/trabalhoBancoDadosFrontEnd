import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model'

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {
produto: Produto;
form: FormGroup
img: any = 'assets/img/user/padrao.png';
loader: boolean = true
selectedFile: File;
numberMask = createNumberMask({
  prefix:"R$ ",
  suffix : "",
  includeThousandsSeparator : true,
  thousandsSeparatorSymbol : ".",
  allowDecimal : true,
  decimalSymbol : ",",
  decimalLimit :2,
  requireDecimal : true,
  allowNegative : true,
  allowLeadingZeroes : true,
  integerLimit : 7
})

//bairros:any[]


  constructor(private produtoService: ProdutoService, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.initializeFormEmpty();
  }
  // <!--,ds_produto,'bo_ativo','sort_order','img','nu_referencia','fabricante','vl_venda','vl_custo','dt_lancamento','cores','color','fornecedor' -->

  initializeFormEmpty() {
    this.form = this.formBuilder.group({
      ds_produto: this.formBuilder.control('', [Validators.required]), 
      nu_referencia: this.formBuilder.control('', [Validators.required]), 
      fabricante: this.formBuilder.control('', [Validators.required]),
      vl_venda: this.formBuilder.control(''), 
      vl_custo: this.formBuilder.control(''), 
      dt_lancamento: this.formBuilder.control(''), 
      cores: this.formBuilder.control(''), 
      fornecedor: this.formBuilder.control(''),
      observacao: this.formBuilder.control(''), 
        fileimg: this.formBuilder.control('') 
        
    })
  }
  save(form){
    this.uploadFile(form)
  }

  uploadFile(form){
    const uploadData = new FormData();
    if (this.selectedFile) {
      console.log("data");
      uploadData.append('fileimg', this.selectedFile, this.selectedFile.name);
      this.produtoService.save(uploadData)
      .subscribe(data =>{
        form.fileimg = data.file
         
        this.saveForm(form)

      },
        response => {
          if (response.status === 401) {
            this.produtoService.notify("não foi possivel salvar");
          }if (response.status === 0) {
            this.produtoService.notify("SERVIDOR OFFILINE");
          }
 
        },
        () => {
        })
    }else{
      this.saveForm(form)
    }
  }

  saveForm(form) {
    this.produtoService.save(form)
      .subscribe(data =>{
        this.produtoService.notify(data.response);
        this.produtoService.goTo()

      },
        
        response => {
          if (response.status === 401) {
            this.produtoService.notify("não foi possivel salvar");
          }if (response.status === 0) {
            this.produtoService.notify("SERVIDOR OFFILINE");
          }
 
        },
        () => {
        })
  }

  name(nome){
    return Date.now()+nome
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
