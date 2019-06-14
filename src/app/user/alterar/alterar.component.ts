import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../user.service';
import { User } from '../user.model'
import { API_PATH_IMG } from './../../app.api'

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {
  user: User;
  form: FormGroup;
  img: string = 'assets/img/user/padrao.png';
  loader: boolean = true;
  selectedFile: File


  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit() {
    this.initializeFormEmpty();
    this.getUser();
  }
  getUser() {
    this.userService.userById(this.router.snapshot.params['id']).subscribe(user => {
      this.user = user
      if (user.img) {
        this.img = `${API_PATH_IMG}/user/${user.img}`
      }
      this.initializeForm(this.user)
      this.loader = false
    });
  }

  initializeForm(user) {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(user.id, [Validators.required]),
      nome: this.formBuilder.control(user.nome, [Validators.required]),
      fileimg: this.formBuilder.control(''),
      bo_ativo: this.formBuilder.control(user.bo_ativo),
      cpf: this.formBuilder.control(user.cpf),
      endereco: this.formBuilder.control(user.endereco),
      telefone: this.formBuilder.control(user.telefone),
      color: this.formBuilder.control(user.color),
      email: this.formBuilder.control(user.email),

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
      color: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      dt_nascimento: this.formBuilder.control('')
    })
  }
  update(form) {
    const uploadData = new FormData();
    if (this.selectedFile) {

      uploadData.append('fileimg', this.selectedFile, this.selectedFile.name);
      this.userService.save(uploadData)
        .subscribe(data => {
          form.fileimg = data.file
          this.updateForm(form)

        }
          ,
          response => {
            if (response.status === 401) {
              this.userService.notify("não foi possivel salvar");
            } if (response.status === 0) {
              this.userService.notify("SERVIDOR OFFILINE");
            }
          },
          () => {
          })
    } else {
      this.updateForm(form);
    }
    this.userService.goTo()
  }
  
  updateForm(form) {
    this.userService.update(form, form.id)
    .subscribe(data => {
      this.userService.notify(data['response']);
    },

        response => {
          if (response.status === 401) {
            this.userService.notify("não foi possivel salvar");
          } if (response.status === 0) {
            this.userService.notify("SERVIDOR OFFILINE");
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
