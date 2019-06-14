import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../user.service';
import { User } from '../user.model'

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {
cliente: User;
form: FormGroup
loader: boolean = true
img: any = 'assets/img/user/padrao.png';
selectedFile: File;


  constructor(private userService: UserService, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.initializeFormEmpty();
  }
  
  initializeFormEmpty() {
    this.form = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required]), 
        fileimg: this.formBuilder.control(''), 
        bo_ativo: this.formBuilder.control(''), 
        cpf: this.formBuilder.control(''),
        telefone: this.formBuilder.control(''),
        pessoa_referencia: this.formBuilder.control(''),
        email: this.formBuilder.control(''),
        dt_nascimento: this.formBuilder.control(''),

    })
  }
  save(form){
    this.uploadFile(form)
  }

  uploadFile(form){
    const uploadData = new FormData();
    if (this.selectedFile) {
      uploadData.append('fileimg', this.selectedFile, this.selectedFile.name);
      this.userService.save(uploadData)
      .subscribe(data =>{
        form.fileimg = data.file
         
        this.saveForm(form)

      },
        response => {
          if (response.status === 401) {
            this.userService.notify("não foi possivel salvar");
          }if (response.status === 0) {
            this.userService.notify("SERVIDOR OFFILINE");
          }
 
        },
        () => {
        })
    }else{
      this.saveForm(form)
    }
  }

  saveForm(form) {
    this.userService.save(form)
      .subscribe(data =>{
        this.userService.notify(data.response);
        this.userService.goTo()

      },
        
        response => {
          if (response.status === 401) {
            this.userService.notify("não foi possivel salvar");
          }if (response.status === 0) {
            this.userService.notify("SERVIDOR OFFILINE");
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
